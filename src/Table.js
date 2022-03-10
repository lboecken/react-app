import React from "react"

export default function Table({tableData, hadleDeleteFunction,rowId}){
    return(
      <table className="table table-striped table-hover">
      <thead key = "thead">
        <tr>
          <th scope="col" className=" bg-warning" >Type</th>
          <th scope="col"className=" bg-warning">Date</th>
          <th scope="col"className=" bg-warning">Decsription</th>
          <th scope="col"className=" bg-warning">Amount</th>
          <th scope="col"className=" bg-warning">Actions</th>
        </tr>
      </thead>
      <tbody tbody="tbody">
        {
        tableData.map((data,index)=>(
         <tr key={index}>
         <td scope="row">{data.type}</td>
         <td >{data.date}</td>
         <td >{data.name}</td>
         <td >${data.amount}</td>
         <td>
         <button type="button" className= "delete" onClick={() => hadleDeleteFunction(rowId)}>
          Delete
        </button>
         </td>
         
       </tr>
        ))}
       
        </tbody>
      </table>
    )
}