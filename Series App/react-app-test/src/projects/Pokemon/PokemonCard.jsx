export const PokemonCard = ({pokeData}) => {
    const poketype = (data) => {
        const types = data.map((pokedata)=>{
            return pokedata.type.name
        })
        return types.join(", ") || "No types found"
    }

    return (
        <div className="pokemon-card">
        <img src={pokeData.sprites.other.dream_world.front_default} alt={pokeData.forms[0].name}/>
        <h2>{pokeData.forms[0].name.toUpperCase()}</h2>
        <div className="pokemon-type">{poketype(pokeData.types)}</div>
        <div className="pokemon-stats">
            <div>Height: <span>{pokeData.height}</span></div>
            <div>Weight: <span>{pokeData.weight}</span></div>
            <div>Speed: <span>{pokeData.stats[5].base_stat}</span></div>
        </div>
         </div>
    )
}