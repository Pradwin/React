import countryInfo from "../API/CountryInfo.json"
import "./About.css"

export const About = () => {
    return <ul className="country-card-list">
    {countryInfo.map((country) => (
        <li className="country-card-item" key={country.id}>
            <div className="country-card">
                <h2 className="country-name">{country.name}</h2>
                <p className="country-capital"><strong>Capital:</strong> {country.capital}</p>
                <p className="country-population"><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p className="country-fact"><strong>Fact:</strong> {country.fact}</p>
            </div>
        </li>
    ))}
</ul>
}