import { useEffect, useState } from "react"
import "../Todo/TodoForm.css"

export const TodoTime = () => {
    const [time,setTime] = useState("")

    
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            const formatedDate = date.toLocaleDateString()
            const formatedTime = date.toLocaleTimeString()
            setTime(`${formatedDate}-${formatedTime}`)
        }
        , 1000)
        return () => clearInterval(interval)
    })
    return (
        <h1>{time}</h1>
    )
}