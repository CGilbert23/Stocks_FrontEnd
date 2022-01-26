import { useState } from "react"

function List({data, isPending,handleDelete}){
   
    if (isPending){
      return <p>Data Loading!</p>
    }  
  
    const newData = data
    console.log(newData)

   
    const rows = newData.map(({stock_id,ticker,name,price,marketcap,screen_status,testing_status, created_at,updated_at,time_diff}, index) => (
       
       <tr>
        <td key={stock_id}>{ticker}</td> 
        <td>{name}</td>
        <td>{price}</td>
        <td>{marketcap}</td>
        <td>{screen_status}</td>
        <td>{testing_status}</td>
        <td>{created_at.substring(5,7)+ "/"+ created_at.substring(8,10)+"/"+ created_at.substring(0,4)}</td>
        <td>{updated_at.substring(5,7)+ "/"+ updated_at.substring(8,10)+"/"+ updated_at.substring(0,4)}</td>
        <td>{time_diff}</td>
        <td>
         <button onClick={()=> handleDelete(stock_id)}>Delete</button>
          </td>
        </tr>))
  
  return(
  <div>
      <hr></hr>
      <hr></hr>
      <table className="route-table">
      <thead>
      <tr>
          <th>Ticker</th>
          <th>Company</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Screen Status</th>
          <th>Testing Status</th>
          <th>Date Created</th>
          <th>Date Updated </th>
          <th>Days At Location</th>
          <th></th>
      </tr>
      </thead>
      <tbody> {rows}
      </tbody>
  
  </table>   
  </div>
  )
  
  }
  
  export default List;