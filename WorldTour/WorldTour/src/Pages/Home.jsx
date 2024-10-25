import {NavLink} from "react-router-dom"
import "./Home.css"

export const Home = () => {
    return <section className="home-section">
    <h1 className="home-title">Welcome to WorldTour</h1>
    <p className="home-subtitle">Discover the beauty of the world, one country at a time</p>
    <NavLink to="/country">
      <button className="home-button">Explore Now</button>
    </NavLink>
  </section>
}