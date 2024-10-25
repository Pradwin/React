import { useState } from "react"
import "../Todo/TodoForm.css"

export const TodoFromContent = ({tasks,setTasks}) => {

    const [input,setInput] = useState({id:"",content:"",checked:false})

    const handleInput = (value) => {
        setInput({id: value, content: value, checked:false})
    }

    const handleTask = (e) => {
        e.preventDefault()
        const {id,content,checked} = input
        if(!content) return

        const todomatch = tasks.find((curtask)=> curtask.content === content)

        if(todomatch){
        setTasks({id:"", content:"", checked:""})
        return
        }

        setTasks((tasks) => [...tasks, {id,content,checked}])
        setInput({id:"", content:"", checked:""})

    }

    return (
        <section>
        <form onSubmit={handleTask}>
            <div>
            <input type="text" value={input.content} onChange={(event) => handleInput(event.target.value)}/>
            </div>
            <div>
            <button type="submit">Add</button>
            </div>          
        </form>
    </section>
    )
}