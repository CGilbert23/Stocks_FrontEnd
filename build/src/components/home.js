import { useState, useEffect} from 'react';
import useFetch from '../components/fetch'
import SummaryTable from "../aggregates/summaryTable"
import List from "../helper/list"
import Intro from "../aggregates/intro"
import NewStockForm from '../forms/newStock';
import Update from '../components/update'
import NewSearch from './newsearch';



const Home = () => {

    /* date */
  
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1
    var yyyy = today.getFullYear();
    if (dd<10){
      dd='0'+ dd
    }
    if (mm<10){
      mm='0' + mm
    }
    const currentDate = `${mm}/${dd}/${yyyy}`
  
    /*State Management : All Exisitng Data */
    const {data,setData,isPending,error} = useFetch(`${process.env.URL}/stocks`)

        /*State Management: New Vehicle Form */
        const initialFormState = {
          ticker:"",
          name: "",
          price:"",
          marketcap: ""
        };
        
        /*POST: New Vehicle Form */
        const [formData, setFormData] = useState({ ...initialFormState });
        
        const handleChange = ({ target }) => {
          setFormData({...formData, [target.name]: target.value });
        };

        const newStonk = (updatedTable) => {
          console.log(data)
          console.log(updatedTable) }
          
        const handleSubmit = (event) => {
          event.preventDefault();
          const newStock = (formData)
          console.log(newStock)
          const url = `${process.env.URL}/stocks`
          const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newStock)
          }
          fetch(url, requestOptions)
            .then(response => console.log('Updated Successfully'))
            .catch(error => console.log('Form submit error', error))
            .then(() => newStonk(newStock))
        
          setFormData({ ...initialFormState });
          
        };
  
        /* Delete A Vehicle */
  
        const deleteStock = (id) => {
          const table = data.filter((item)=> item.stock_id != id)
          setData(table)
        }
       
  
        const handleDelete = (stock_id) => {
          fetch(`${process.env.URL}/stocks/${stock_id}`, {
            method: 'DELETE'
          })
          .then(response => console.log(`Deleted Car, ${stock_id}`))
          .then(()=> deleteStock(stock_id))
         
      }


      /*UPDATE*/
      const initialStatusState = {one_status: "Complete",two_status: null}
      const [values,setValues] = useState({...initialStatusState})
      
      const handleStatusChange = (event) => {
        const {name, value} = event.target
        setValues({...values, [name]:value})
        
      }

      const handleSubmit2 = () => {
        console.log(values)
      }


      const list = [
        { name: "james", age: 15 },
        { name: "justin", age: 12 },
        { name: "maria", age: 13 },
        { name: "mary", age: 21 },
      ];
    return(

        <div>
        <Intro currentDate ={currentDate}/>
        <SummaryTable />
        <NewStockForm formData = {formData} setFormData = {setFormData} handleChange ={handleChange} handleSubmit={handleSubmit}/>
    
        <hr></hr>

        <List data={data} isPending={isPending} handleDelete={handleDelete} />
        <hr></hr>
        <Update  handleStatusChange={handleStatusChange} handleSubmit2={handleSubmit2} />
        <NewSearch list={list}/>
        
      
        </div>
    )

    }

    export default Home;