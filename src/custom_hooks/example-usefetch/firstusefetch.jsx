import React, { useEffect, useState } from "react";
import useFetch from "./usefetch";

const URL="https://jsonplaceholder.typicode.com/users"

const FirstFetch=()=>{
   const [userdata,isloading,iserror]=useFetch(URL)


    if(isloading){
        return<>Loading.....</>
    }

if(iserror){
    return<>Something is wrong---</>
}
    return(
        <>
        <h2>NAMES</h2>
        <ul>
            {
            userdata.map((eachUser)=>{
                return( <li key={eachUser.id}>{eachUser.name}</li>)
               
            })
        }
        </ul>
        </>
    )
}
export default FirstFetch;