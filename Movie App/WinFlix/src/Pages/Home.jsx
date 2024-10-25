
import { NavLink } from "react-router-dom"
import "./Home.css"
export const Home = () => {
    return (
        <main>
        <section className="hero">
            <h2>Your Favorite Movies Awaits!</h2>
            <NavLink to="/movie" className="cta-button">Browse Movies</NavLink>
        </section>

        <section className="featured-movies">
            <h2>Featured Series</h2>
            <div className="movie-grid">
                <div className="movie-card">
                    <img src="./Images/mh.jpg" alt="Money Hiest"/>
                    <h3>Money Hiest</h3>
                </div>
                <div className="movie-card">
                    <img src="./Images/tc.webp" alt="The Crown"/>
                    <h3>The Crown</h3>
                </div>
                <div className="movie-card">
                    <img src="./Images/st.jpg" alt="Stranger Things"/>
                    <h3>Stranger Things</h3>
                </div>
                <div className="movie-card">
                    <img src="./Images/tw.webp" alt="The Witcher"/>
                    <h3>The Witcher</h3>
                </div>
            </div>
        </section>
    </main>
    )
}