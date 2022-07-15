import React, { useState } from 'react';
import HeaderNav from "../HeaderNav";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {
    const [emailVal, setEmailVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [userDetails, setUserDetails] = useState(true);
//    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    
    let userdata = {
        email: "test@gmail.com",
        password: "test"
    }
    
    const closeAlert = () => {
        setUserDetails(true);
    }
    
    const logIn = (ev) => {
       ev.preventDefault(); 
        
        if (userdata.email === emailVal && userdata.password === passwordVal) {
            console.log("Details correct");
//            setLoggedIn(true);
            navigate('/', {replace: true, state: true});

        }
        else {
            setUserDetails(false);
        }
    }
    
  return (
    <main >
        <HeaderNav/>
        <div className="container">
        <h2>Log in</h2>
        {
            userDetails === false &&
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>Your details are incorrect!</strong>
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={closeAlert}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
        }
        <form onSubmit={logIn}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" 
                id="email" aria-describedby="emailHelp" 
                placeholder="Enter email" value={emailVal}
                onChange={e => setEmailVal(e.target.value)} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" 
                id="password" placeholder="Password"
                value={passwordVal} onChange={e => setPasswordVal(e.target.value)}/>
          </div>
              {/*<div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1">
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>*/}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p>If you do not have an account please sign up here <Link to="/signup">Signup</Link></p>
        </div>
    </main>
  );
}

export default Login