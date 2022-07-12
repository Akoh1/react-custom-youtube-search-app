import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

function HeaderNav () {
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
                  {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>*/}
                  <Link to="/login">Login</Link>
              </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default HeaderNav;