import { NavLink } from "react-router-dom"

export const Footer = () => {
    return <>
     <footer>
    <p>&copy; 2024 My Website. All Rights Reserved.</p>
    <ul className="footer-links">
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/movie">Movie</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </footer>
    </>
}