import React from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../context/useAuth";

import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login-form">
      <div>
        <h2> Login</h2>
        <form>
          <input type="email" name="" id="" placeholder="Your email" />
          <br />
          <input type="password" name="" id="" placeholder="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to ema-john? <NavLink to="/register">Create Account</NavLink>
        </p>

        <div>--------or---------</div>
        <button onClick={handleGoogleSignIn} className="btn-regular">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
