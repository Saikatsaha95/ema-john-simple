import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Create Account</h2>
        <form>
          <input type="email" name="" id="" placeholder="Your email" />
          <br />
          <input type="password" name="" id="" placeholder="Your password" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-enter password"
          />
        </form>

        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
        <div>-------0-------</div>
        <button className="btn-regular">Google sign in</button>
      </div>
    </div>
  );
};

export default Register;
