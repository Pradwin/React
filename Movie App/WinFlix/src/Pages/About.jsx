import { NavLink } from "react-router-dom"
import "./About.css"

export const About = () => {
    return (
        <div className="about-container">
    <h1>About Us</h1>
    <p>
        Welcome to our website! We are dedicated to providing the best services and solutions
        to meet your needs. Our team is composed of experienced professionals committed to
        excellence and customer satisfaction.
    </p>
    <h2>Our Mission</h2>
    <p>
        Our mission is to deliver high-quality products and services that enhance the
        experiences of our customers and make a positive impact on the community.
    </p>
    <h2>Our Values</h2>
    <ul>
        <li>Integrity: We believe in being honest and transparent in all our dealings.</li>
        <li>Innovation: We strive to continually improve and offer cutting-edge solutions.</li>
        <li>Customer Focus: Our customers are at the heart of everything we do.</li>
    </ul>
    <h2>Contact Us</h2>
    <p>
        If you have any questions or would like to learn more about our services, please
        <NavLink to="/contact">reach out</NavLink> to us. We look forward to hearing from you!
    </p>
</div>
    )
}