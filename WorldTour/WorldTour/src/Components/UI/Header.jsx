import { NavLink } from "react-router-dom"
import "./Header.css"

export const Header = () => {
    return  <header>
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        WorldTour
      </NavLink>
      <div className="navbar-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/country">Country</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  </header>
}