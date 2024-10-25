import { NavLink } from "react-router-dom"

export const Header = () => {

    const className = (isActive) => {
        return isActive.isActive ? "active" : "not-active";
    };    
    return <>
     <header>
    <nav className="navbar">
      <div className="logo">
        <h2>My Website</h2>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/home" className={(isActive)=>className(isActive)}>Home</NavLink></li>
        <li><NavLink to="/about" className={(isActive)=>className(isActive)}>About</NavLink></li>
        <li><NavLink to="/movie" className={(isActive)=>className(isActive)}>Movie</NavLink></li>
        <li><NavLink to="/contact" className={(isActive)=>className(isActive)}>Contact</NavLink></li>
      </ul>
    </nav>
  </header>
    </>
}