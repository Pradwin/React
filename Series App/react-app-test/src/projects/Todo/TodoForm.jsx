import { useState } from "react"
import "../Todo/TodoForm.css"
import { TodoFromContent } from "./TodoFormContent";
import { TodoFormList } from "./TodoFormList";
import { TodoTime } from "./TodoTime";
import { getStorage,setStorage } from "./TodoStorage";

export const TodoWeb = () => {
   
    const [tasks, setTasks] = useState( () => getStorage())
    const deleteElement = (index) => {
        setTasks(tasks.filter((task,i )=>{
            if(i!==index) return task
        }))
    }

    const handleCheck = (value) => {
        const val = tasks.map((curtask) =>{
            if(curtask.content === value){
                return {...curtask,checked: !curtask.checked}
            }
            else{
                return curtask;
            }
        })
        // New Array of object after check
        setTasks(val);
    }
    
    setStorage(tasks)

    return (<div className="container">
    <section>
        <h1>Todo App</h1>
        <TodoTime/>
    </section>
    <TodoFromContent tasks={tasks} setTasks={setTasks}/>
    <section className="tasklist">
        <ul>
            {tasks.map((currenttask,index)=>{
                return (<TodoFormList key={index} index={index} task={currenttask} checked={currenttask.checked} deleteElement={deleteElement}
                handleCheck={handleCheck}
                />)
            })}
        </ul>
    </section>
    <div>
        <button onClick={() => setTasks([])}>Clear All</button>
    </div>
    </div>)
}