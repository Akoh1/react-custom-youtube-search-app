import React, { useState, useMemo } from 'react';

function Comment(props) {
    
    const [comment, setComment] = useState([]);
    
    const [textValue, setTextValue] = useState("");


  const addDetails = () => {

    let detail = {}
  
    detail[props.etag] = textValue;
    setComment(arr => [...arr, detail]);
    console.log("state comments: " + comment);
//  	comments.push(detail);
//    setComment([])

  }

  const getcommentItems = () => {
    let array = []
    comment.forEach(elems => {
      console.log("Items: " + elems)
            for (const i in elems) {
              if (i === props.etag) {
                console.log("Items: " + elems[i])
                array.push(elems[i])
              }
            }
      })

    console.log("array: " + array)

	  return array;
  }

  	return (
  		<div className="container">
	  		<div className="mt-3 mb-3 comment-div">
  			  <label htmlFor="commentTextArea" className="form-label">Comment</label>
  			  <textarea className="form-control comment-area" 
                        rows="3" value={textValue}
                        onChange={e => setTextValue(e.target.value)}
                  >
              </textarea>
  			  <button onClick={addDetails}
  			  	className="btn btn-primary float-roght" 
  			  	type="submit">comment</button>
  			</div>

		
		
			 <div className="d-flex flex-column coment-content mt-3">
        

				  {(getcommentItems() || []).map((text, id) => (
              <div key={id} className="p-2 coment-content-line m-3 mb-3">{text}</div>
          ))}
			</div>
		</div>
  	);

 }

{/*class Comment extends Component {


  constructor(props) {
    super(props);
   

    this.state ={
  
    }

    this.details = {}

    this.getCommentValue();

    // this.addDetails();

    this.comments = [];

    this.getcommentItems();

  }

  getCommentValue() {
  	// let etag = this.props.etag;
  	let inputValue = document.querySelector("#commentTextArea"); 
    var inputVal = "";

    if (inputValue) {
      inputVal = inputValue.value;
    }

    
    return inputVal;
  }

  addDetails() {
  	let comment = this.getCommentValue();

    let detail = {}
  
    detail[this.props.etag] = comment
  	this.comments.push(detail);
  	this.setState({
      comment: this.comments
    })
  	console.log(this.state);

  }

  getcommentItems() {
    let array = []
    this.comments.forEach(elems => {
      console.log("Items: " + elems)
            for (const i in elems) {
              if (i === this.props.etag) {
                console.log("Items: " + elems[i])
                array.push(elems[i])
              }
            }
      })

    console.log("array: " + array)

	  return array;
  }

  

  render() {
  	return (
  		<div className="container">
	  		<div className="mt-3 mb-3 comment-div">
  			  <label for="commentTextArea" className="form-label">Comment</label>
  			  <textarea className="form-control comment-area" id="commentTextArea" rows="3"></textarea>
  			  <button onClick={() => this.addDetails()}
  			  	className="btn btn-primary float-roght" 
  			  	type="submit">comment</button>
  			</div>

		
		
			 <div className="d-flex flex-column coment-content mt-3">
        

				  {(this.getcommentItems() || []).map((text, id) => (
              <div key={id} className="p-2 coment-content-line m-3 mb-3">{text}</div>
          ))}
          
			</div>
		</div>
  	);
  }

 }*/}


 export default Comment;