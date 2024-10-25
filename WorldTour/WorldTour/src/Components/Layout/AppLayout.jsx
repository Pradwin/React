import { Outlet } from "react-router-dom"
import { Header } from "../UI/Header"
import { Footer } from "../UI/Footer"
import "./Layout.css"

export const AppLayout = () => {
    return <div className="app">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
}