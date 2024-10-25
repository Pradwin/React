import { NavLink, useLoaderData } from "react-router-dom"
import "./MovieDetail.css"

export const MovieDetail = () => {
    const data = useLoaderData();
    const {
        Actors,
        Awards,
        BoxOffice,
        Country,
        Director,
        Genre,
        Language,
        Metascore,
        Plot,
        Poster,
        Released,
        Runtime,
        Title,
        Writer,
        imdbRating,
      } = data;
    return (  
    <div className="movie-container">
        <div className="poster">
            <img src={Poster} alt={Title}/>
        </div>
        <div className="movie-details">
            <h1>{Title}</h1>
            <p className="plot">{Plot}</p>
            <ul>
                <li><strong>Director:</strong>{Director}</li>
                <li><strong>Actors:</strong>{Actors}</li>
                <li><strong>Genre:</strong>{Genre}</li>
                <li><strong>Language:</strong>{Language}</li>
                <li><strong>Country:</strong>{Country}</li>
                <li><strong>Released:</strong>{Released}</li>
                <li><strong>Runtime:</strong>{Runtime}</li>
                <li><strong>Box Office:</strong>{BoxOffice}</li>
                <li><strong>Awards:</strong> {Awards}</li>
                <li><strong>IMDB Rating:</strong>{imdbRating}</li>
                <li><strong>Metascore:</strong>{Metascore}</li>
                <li><strong>Writer:</strong>{Writer}</li>
            </ul>
        </div>
        <NavLink to="/movie">Go back</NavLink>
    </div>
    )
}