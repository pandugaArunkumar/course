import React from "react";
import userData from "./userData";
import { useParams } from "react-router-dom";

const UserDetails=()=>{
 
     const {userId}=useParams();
    
   const userDetailsData = userData.find((eachUser)=> eachUser.id == userId)

     return(
        <div>
         <h1>USER DETAILS</h1>
       
         <hr />
        <h2>{userDetailsData.name}</h2>
        <h3>{userDetailsData.email}</h3>
        <h3> {userDetailsData.username}</h3>
        <h4>{userDetailsData.phone}</h4>


        </div>
     )
}
export default UserDetails;