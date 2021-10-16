import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../context/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        {user.email && (
          <span style={{ color: "white", margin: "15px" }}>
            Hello {user.displayName}
          </span>
        )}

        {user.email ? (
          <button onClick={logOut}>Log out</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
