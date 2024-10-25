import { NavLink } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
    return  <footer className="footer">
    <div className="footer-links">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/privacy-policy">Privacy Policy</NavLink>
    </div>
    <p>© 2024 WorldTour. All Rights Reserved.</p>
  </footer>
}