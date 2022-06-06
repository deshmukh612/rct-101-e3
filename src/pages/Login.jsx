import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios"
import {useNavigate, useLocation} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location)
  const from = location?.state?.from?.pathname || "/products";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password)
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
          console.log((res.data.token))
        // alert("success");
        login()

     
        
      })
      .catch((err) => {
        console.log(err)
      });
    
  };
  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [isAuth]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        maxWidth: "250px",
        gap: "5px",
      }}
    >
      <input
        data-cy="login-email"
        placeholder="Enter Email"
        value={email}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input data-cy="login-password" placeholder="Enter Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}/>
      <button data-cy="login-submit"onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
