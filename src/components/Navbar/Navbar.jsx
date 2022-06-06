import React, { useContext } from "react";
import {Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to={"/login"}>Login</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button">{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
