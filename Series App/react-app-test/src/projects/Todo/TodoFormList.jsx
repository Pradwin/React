import { MdDelete } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";

export const TodoFormList = ({task,index,checked,deleteElement,handleCheck}) => {
    const check = checked ? "checked" : "disabled"
    return (
        <li>
                    <h4 className={check}>{task.content}</h4>
                    <div>
                    <button onClick={() => deleteElement(index)}><MdDelete/></button>
                    <button onClick={() => handleCheck(task.content)}><IoMdCheckmarkCircle/></button>
                    </div> 
                </li>
    )
}