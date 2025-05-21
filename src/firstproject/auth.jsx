import React, { useState ,useContext} from "react";

const AuthContext=React.createContext();


  

export  const AuthProvider=({children})=>{
  
  const [User, setUser]=useState(null);


  const login=(username)=>{
    setUser(username)
  }
  function logout(){
    setUser(null)
  }
    return <AuthContext.Provider value={{User,login,logout}}>{children}</AuthContext.Provider>
  
}

export const useAuth=()=>{
  return useContext(AuthContext)
}