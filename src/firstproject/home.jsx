import React from "react";
import { useAuth } from "./auth";
import { Navigate, useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();

    const data=useAuth();
    console.log(data);

    const navigatetosucces=()=>{
        navigate("/success")
    }
    return(
        <div>
            <h1>HOME</h1>
            <button onClick={navigatetosucces}>submit</button>
        </div>
    )

}
export default Home;