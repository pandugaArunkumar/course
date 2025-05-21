import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";



function Login(){

    const {login}=useAuth();
    const navigate = useNavigate();
    const [name,setname]=useState("")
    
    
    return(
        <>
        <h1>LOGIN</h1>
        <input type="text" name="name" id="name"  placeholder="enter the name" onChange={(e)=>{setname(e.target.value)}}/>
        <button onClick={() => {
          login(name);
          navigate("/", { replace: true});
        }}>Login</button>
        </>
    )
}
export default Login;