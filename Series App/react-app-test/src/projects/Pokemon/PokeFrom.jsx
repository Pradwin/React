import { useEffect, useState } from "react"
import { PokemonCard } from "./PokemonCard"
import './PokeForm.css'

export const PokeForm = () => {
    const [pokeData,setPokeData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [search,setSearch] = useState("")
    // const API = "https://pokeapi.co/api/v2/pokemon/bulbasaur"
    const API = "https://pokeapi.co/api/v2/pokemon?limit=500"
    
    //Using Promises

    // useEffect(() => {
    //     fetch(API).then((response) => response.json())
    //     .then((data) => {                                        
    //         setPokeData(data)
    //         setLoading(false)
    //     })
    //     .catch((error) => {
    //         console.error("Error:", error)
    //         setLoading(false)
    //         setError(error)
    //     });
    // },[])

    //Using async/await along with try and catch

    const fetchAPI = async() => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            
            const detailedData = data.results.map(async (poke) => {
                const response = await fetch(poke.url);
                const pokeDetail = await response.json();
                return pokeDetail;
            });
            setLoading(false);
            // Wait for all Pokémon details to be fetched
            const pokeDetails = await Promise.all(detailedData);
    
            // Now update state with the detailed Pokémon data
            setPokeData(pokeDetails);
        }
        catch(error) {
            console.error("Error:", error);
            setLoading(false);
            setError(error);
        }
    };
    

    useEffect(() => {
        fetchAPI()
    },[])
    

    const filteredPokeData = pokeData.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))
    
    if (loading) {
        return <h1 className="loading-message">Loading...</h1>;
    }

    if (error) {
        return <h1 className="error-message">Error: {error.message}</h1>;
    }

    if(filteredPokeData)
        return (
            <div className="container">
                <div>
                <h1 className="card-heading">Top 100 Pokémon</h1>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>   
            <div className="poke-container">
            {filteredPokeData.map((pokemon, index) => (
                <PokemonCard key={index} pokeData={pokemon} />
            ))}
            </div>
            </div>
     )
}