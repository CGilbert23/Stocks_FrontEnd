import { useState } from "react";


function NewStockForm({formData, setFormData, handleChange, handleSubmit}) {


    return (
      <form action="http://localhost:5000/stocks" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="ticker">Stock Ticker:
          <input type='text' id="ticker" name="ticker" onChange={handleChange} value={formData.ticker}></input>
        </label>
        <label htmlFor="name">Company Name:
          <input type='text' id="name" name="name" onChange={handleChange} value={formData.name}></input>
        </label>
        <label htmlFor="price">Current Price:
          <input type='number' id="price" name="price" onChange={handleChange} value={formData.price}></input>
        </label>
        <label htmlFor="marketcap">Current Market Cap:
          <input type='number' id="marketcap" name="marketcap" onChange={handleChange} value={formData.marketcap}></input>
        </label>
        
       <button type='submit'>Submit</button>
        
        </form>
    );
  }

  export default NewStockForm;