import { useEffect, useState, useTransition } from "react";
import { getCountryIndData } from "../../API/GetData";
import { useNavigate, useParams } from "react-router-dom";
import "./CountryDetail.css"
import { Loader } from "./Loader";

export const CountryDetail = () => {
    const [country, setCountry] = useState(); 
    const [isPending, startTransition] = useTransition(); 

    const nav = useNavigate();

    const params = useParams();
    useEffect(() => {
        startTransition(async () => {
          const res = await getCountryIndData(params.id);
          if (res.status === 200) {
            setCountry(res.data[0]);
          }
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      if(isPending) return <Loader/>

      return (
        country && (
            <div className="country-detail">
                <div className="country-flag">
                    <img src={country.flags.svg} alt={country.flags.alt || `${country.name.common} flag`} />
                </div>
                <h2>{country.name.official}</h2>
                <p><strong>Capital:</strong> {country.capital.join(", ")}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Subregion:</strong> {country.subregion || "N/A"}</p>
                <p><strong>Top-level Domain:</strong> {country.tld.join(", ")}</p>
                <p><strong>Languages:</strong> {Object.values(country.languages).join(", ")}</p>
                <p><strong>Currency:</strong> {Object.values(country.currencies).map(curr => `${curr.name} (${curr.symbol})`).join(", ")}</p>
                <button className="go-back-button" onClick={() => nav(-1)}>Go Back</button>
            </div>
        )
    );
    
}