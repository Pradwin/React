import { NavLink, useNavigate } from "react-router-dom"
import "./Error.css"

export const Error = () => {
    const nav = useNavigate();
    const handleBack = () => {
        nav(-1)
    }
    return  <div className="error-page">
    <h1 className="error-title">404</h1>
    <p className="error-message">Oops! The page you are looking for does not exist.</p>
    <NavLink onClick={handleBack} className="error-link">Go Back Home</NavLink>
  </div>
}