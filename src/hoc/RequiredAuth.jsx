import React, { useContext } from "react";
import {  useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  
  const { isAuth } = useContext(AuthContext);
  
  
  //   const location = useLocation()
  //   console.log(location)
  const { pathname } = useLocation();
  
    if (isAuth) {
      return children;
    } else {
      //redirecting to login page
      return <Navigate to="/login" state={{ from: pathname }} replace/>;
    }
  
  
};

export default RequiredAuth;
