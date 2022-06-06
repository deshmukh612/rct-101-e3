import React, { createContext, useState } from "react";
import {  useNavigate, useLocation} from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
 

  const navigate = useNavigate();
  //   const location = useLocation()
  
  // const { state } = useLocation()
  //   console.log(location)
  // console.log(state)
  
    const login = () => {
      setIsAuth(true);
      // if(state.from){
      //     navigate(state.from, { replace: true })
      // }else{
      //     navigate("/")
      // }
    }
  const logout = () => {
    setIsAuth(false);
    navigate("/login")
  };
  return <AuthContext.Provider value={{isAuth,  login, logout, setIsAuth }}>{children}</AuthContext.Provider>;
};
