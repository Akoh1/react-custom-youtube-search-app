import React, { useState } from 'react';


function SearchBar(props) {
    const [term, setTerm] = useState("");
    
    const searchValue = () => {
        props.onSearchTerm(term)
    };
    
    return (
        <div className="search-bar">
          <input value={term} onChange={e => setTerm(e.target.value)}/>
          <button 
          className="btn btn-outline-secondary" 
          type="button" onClick={searchValue}><i className="bi bi-search"></i></button>
        </div>
    );
}


export default SearchBar;
