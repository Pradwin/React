import { useNavigate, useRouteError } from "react-router-dom"
import { NavLink } from "react-router-dom";


export const Error = () => {
    const errordata = useRouteError();
    const nav = useNavigate();

    const handleBack = () => {
        nav(-1);
    }
    return (
        <div className="error-container">
        <h1>Oops!</h1>
        <h2>{errordata.status} - {errordata.statusText}</h2>
        <p>{errordata.data}</p>
        <NavLink className="error-tag" onClick={handleBack}>Go Back</NavLink>
    </div>
    )
}