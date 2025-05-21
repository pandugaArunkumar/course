import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const Final = () => {
  const [userdata,setuserdata]=useState([])
  const [loading,setloading]=useState(false);
  const [iserror,setiserror]=useState({status:false , msg:" "})

  const fetchuserdata= async (apiurl)=>{
       setloading(true);
       setiserror({ status: false, msg: "" });
    try{
      const response= await fetch(apiurl);
    const data=await response.json();
    setuserdata(data);
    setloading(false)
    setiserror({ status: false, msg: "" });
    if(response.status===404){
      throw new Error("data not found")
    }
    }
    catch(error){
      setloading(false);
      setiserror({
        status: true,
        msg: error.message || "something went wrong, pls try again!",
      });

    }

  }
  useEffect(()=>{
    fetchuserdata(URL)
  },[])
  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (iserror?.status) {
    return (
      <div>
        <h3 style={{ color: "red" }}>{iserror?.msg}</h3>
      </div>
    );
  }

  return(
    <div>
      <ul>
        {
          userdata.map((eachUser)=>{
            const {id, name, email}=eachUser;
            return(
              <li key={id}>
               <div>{name}</div>
               <div>{email} </div>
               </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Final;
