import { useLoaderData } from "react-router-dom";
import { Cards } from "../Material/Cards";
import "./Movie.css"

export const Movie = () => {
    const MovieData = useLoaderData();
    return (
        <ul>
            {MovieData.Search.map((curMovie) => (
                <Cards key={curMovie.imdbID} data={curMovie} />
            ))}
        </ul>
    );
};
