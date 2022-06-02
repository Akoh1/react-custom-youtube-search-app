import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

  }

  getInputValue() {
        // show the user input value to console
    let inputValue = document.querySelector("#search-value"); 
    var inputVal = "";

    if (inputValue) {
      inputVal = inputValue.value;
    }

    this.setState({term: inputVal});
    this.props.onSearchTerm(inputVal);
    console.log("whats going on")
  }


  render() {

    return (
        <div className="search-bar">
          <input id="search-value"/>
          <button 
          className="btn btn-outline-secondary" 
          type="button" onClick={() => this.getInputValue()}><i className="bi bi-search"></i></button>
        </div>
       
      );
     }

}

export default SearchBar;
