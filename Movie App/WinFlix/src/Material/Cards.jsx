/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./Cards.css"
export const Cards = ({ data }) => {
    return (
      <li className="anchor-li">
        <img 
          src={data.Poster || 'https://via.placeholder.com/150'} 
          alt={data.Title || 'No Title'} 
          style={{ width: '150px', height: '200px' }} 
        />
        <h1>{data.Title || 'No Title Available'}</h1>
        <p>{data.Year || 'Unknown Year'}</p>
        <NavLink to={`/movie/${data.imdbID}`} className="nav-link">Watch Now</NavLink>
      </li>
    );
  }
  