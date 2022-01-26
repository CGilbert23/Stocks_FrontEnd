const SearchBar =({userInput,setUserInput}) => {



    return (
        <div>
            <input 
            value={userInput}
            placeholder="search name"
            onChange={(e)=> setUserInput(e.target.value)}
            />
        </div>
        
      );

}

export default SearchBar;