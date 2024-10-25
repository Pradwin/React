import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet, useNavigation } from 'react-router-dom';

export const Applayout = () => {
    const load = useNavigation();
    if (load.state==="loading"){
        return <h1>Loading...</h1>
    }
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}