import HeaderNav from "../HeaderNav";
import { Outlet, Link } from "react-router-dom";

function Signup() {
  return (
    <main >
        <HeaderNav/>
        <div className="container">
        <h2>Signup</h2>
        <form>
            <div className="form-group">
                <label htmlFor="username">Email address</label>
                <input type="text" className="form-control" id="username" placeholder="Username"/>
               
            </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="password1">Confirm Password</label>
            <input type="password1" className="form-control" id="password1" placeholder="Confirm Password"/>
          </div>
              {/*<div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1">
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>*/}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p>If you already have an account please log in here <Link to="/login">Login</Link></p>
        </div>
    </main>
  );
}

export default Signup