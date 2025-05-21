import React from "react";
import Login from "./login";
import { useNavigate } from "react-router-dom";

const Logout=()=>{
    const Navigate=useNavigate();
    return(
        <>
        <h2>BACK TO LOGIN PAGE</h2>
        <button onClick={(e)=>{
            Navigate('/login')
        }}>login</button>
        </>
    )
}
export default Logout;