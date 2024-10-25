import { useEffect, useState, useTransition } from "react";
import {NavLink} from "react-router-dom"
import { getCountryData } from "../API/GetData";
import "./Country.css"
import { Loader } from "../Components/UI/Loader";
import { SearchFilter } from "../Components/UI/SearchFilter";

export const Country = () => {
    const [Countries, setCountries] = useState([]); 
    const [isPending, startTransition] = useTransition(); 

    const [search,setSearch] = useState();
    const [filter,setFilter] = useState("All")

    
    useEffect(() => {
        startTransition(async () => {
          const res = await getCountryData();
          setCountries(res.data);
        });
      }, []);

    
    if (isPending) return <Loader/>;

    const handleFilter = (country) => {
        if (search) return country.name.common.toLowerCase().includes(search.toLowerCase())
        else return country
    }

    const filterRegion = (country) => {
        if(filter==="All") return country
        else return country.region === filter
    }
    const filterData = Countries.filter((country)=>handleFilter(country) && filterRegion(country))

    
    return (
        <div>
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} Countries={Countries} setCountries={setCountries}/>
             <ul className="country-list">    
    {filterData.map((country, index) => {
        const { capital, flags, name, population, region } = country; 
        return (
            <li key={index} className="country-card">
                <div className="country-flag">
                    <img src={flags.svg} alt={`${name.common} flag`} />
                </div>
                <div className="country-details">
                    <h3>{name.common.length > 10 ? name.common.slice(0,10)+"..." : name.common}</h3>
                    <p><strong>Capital:</strong> {capital[0]}</p>
                    <p><strong>Population:</strong> {population}</p>
                    <p><strong>Region:</strong> {region}</p>
                    <NavLink to={`/country/${name.common}`}><button className="read-more-btn">Read More</button></NavLink>
                </div>
            </li>
        );
    })}
</ul>
        </div>    
    );
};
