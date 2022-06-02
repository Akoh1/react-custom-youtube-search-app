import React, { Component } from 'react';


class Comment extends Component {


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
          {/*{this.state.comment?.forEach(elem => {
            <div  className="p-2 coment-content-line m-3 mb-3">flex</div>
            for (const i in elems) {
              if (i === this.props.etag) {
                <div key={i} className="p-2 coment-content-line m-3 mb-3">{elems[i]}</div>
              }
            }
          })}*/}
			</div>
		</div>
  	);
  }

 }


 export default Comment;