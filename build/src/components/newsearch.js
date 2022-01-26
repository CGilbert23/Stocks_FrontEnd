import { useState } from "react";
import SearchBar from "./searchbar";

const NewSearch = ({list}) => {

    const [userInput,setUserInput] = useState("")
    const [data,setData] = useState(list)



    const updateInput = async (userInput) => {
        const filtered = list.filter((item)=> {return item.name.toLowerCase().includes(userInput)})
        setUserInput(userInput)
        setData(filtered)
        
    }


  

    return (
        <div>
            <h1>List</h1>
            <SearchBar userInput={userInput} setUserInput={setUserInput}/>
            <div>
                {data.map((item)=> <p>{item.name}</p>)}
            </div>
        </div>
        
      );

}


export default NewSearch;