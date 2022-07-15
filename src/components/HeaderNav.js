import React, { useState, useEffect, useContext } from 'react';
import { Outlet, Link } from "react-router-dom";
import HomeContext from ".././Context";

function HeaderNav (props) {
    
    const setLoggedIn = useContext(HomeContext);
  
    
    const logOut = () => {
        console.log("Logout");
        setLoggedIn(false);
    }
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">Youtube Search</Link>
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                </ul>
                 
                  {
                     props.loggedIn === true ? 
                         <ul className="navbar-nav">
                             <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Dropdown link
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                 {/* <a class="dropdown-item" href="#">Action</a>*/}
                                  <button className="btn btn-outline-success my-2 my-sm-0 dropdown-item" type="submit" onClick={logOut}>Logout</button>
                                </div>
                              </li>
                            </ul>
                         
                         : <Link to="/login">Login</Link>
                  }
                 
              </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default HeaderNav;