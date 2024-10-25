/* eslint-disable react/prop-types */
export const CurdCard = ({curData,HandleDelete,HandleUpdate}) => {
    return<li className="curd-card-content">
    <div>
      <h1>{curData.title}</h1>
      <p>{curData.body}</p>
      <div className="card-actions">
        <button className="edit-btn" onClick={()=>HandleUpdate(curData)}>Edit</button>
        <button className="delete-btn" onClick={()=>HandleDelete(curData.id)}>Delete</button>
      </div>
    </div>
  </li>
}