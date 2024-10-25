/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import "./Form.css"
import { postData,putData } from "../API/GetAPI"
export const Form = ({data,setData,updateData,setUpdateData}) => {

    const [addData,setAddData] = useState({
        title:"",
        body:"",
    })

    const handlePost = (e) => {
       const name = e.target.name
       const value = e.target.value

       setAddData((prev)=>{
            return{...prev,[name]:value}
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const type = e.nativeEvent.submitter.value
        if(type === "Add"){
        handlepostData()
        }
        else if(type === "Edit"){
        handleupdateData()
        }
        setAddData({
            title:"",
            body:""
        })
    }

    const handlepostData = async() => {
        try{
        const res = await postData(addData)
        if(res.status === 201){
            setData([...data,addData])
        }
        }
        catch(error){
            console.log(error)
        }
    }

    const handleupdateData = async() => {
        try{
            const res = await putData(updateData.id,addData)
            console.log(res)
            if(res.status === 200){
                setData((prev)=>{
                    return prev.map((curdata)=>{
                        return curdata.id === updateData.id ? addData : curdata
                    })
                })
            }
            setUpdateData({})
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        updateData && setAddData({
            title:updateData.title || "",
            body:updateData.body || ""
        })
    },[updateData])

    const action = Object.keys(updateData).length === 0;

    return (
        <div className="form-container">
    <form id="addForm" onSubmit={handleSubmit}>
        <div className="form-row">
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="Enter title" required value={addData.title} onChange={handlePost}/>
            </div>
            <div className="form-group">
                <label htmlFor="body">Body:</label>
                <input type="text" id="body" name="body" placeholder="Enter body" required value={addData.body} onChange={handlePost}/>
            </div>
            <button type="submit" className="submit-btn" value={action? "Add" : "Edit"}>{action? "Add" : "Edit"}</button>
        </div>
    </form>
</div>
    )
}