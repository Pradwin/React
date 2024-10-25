import { useEffect, useState } from "react";
import { deleteData, getData } from "../API/GetAPI";
import { CurdCard } from "../UI/CurdCard";
import "./CurdData.css";
import { Form } from "../UI/Form";

export const CrudData = () => {
  const [data, setData] = useState([]);
  const [updateData,setUpdateData] = useState({});

  useEffect(() => {
    getAlldata();
  }, []);

  const getAlldata = async () => {
    try {
      const response = await getData();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleDelete = async (id) => {
    try {
      const response = await deleteData(id);
      if (response.status === 200) {
        const updatedData = data.filter((curData) => curData.id !== id);
        setData(updatedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleUpdate = (curElem) => {
    setUpdateData(curElem)
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>CRUD Operation</h1>
      </div>
      <Form data={data} setData={setData} updateData={updateData} setUpdateData={setUpdateData} />
      <ul>
        {data.map((curData,index) => (
          <CurdCard key={index} curData={curData} HandleDelete={HandleDelete} HandleUpdate={HandleUpdate} />
        ))}
      </ul>
    </div>
  );
};
