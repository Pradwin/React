import { useState } from "react"
import './LoginForm.css'

export const LoginForm = () => {

    const [user,setUser] = useState({
        username: "",
        password: "",
    })

    const handleVal = (e) => {
        const {name,value} = e.target
        setUser((prev)=> ({...prev,[name]:value}))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }


    return(
    <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" value={user.username} onChange={(e) => handleVal(e)} required/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" value={user.password} onChange={(e) => handleVal(e)} required/>       
            <button type="submit">Login</button>
        </form>
        <div className="register-link">
            <p>Dont have an account? <a href="#">Register here</a></p>
        </div>
    </div>
    )
}