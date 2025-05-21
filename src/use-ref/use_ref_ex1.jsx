import React,{useRef,useEffect,useState} from "react";

const Final3=()=>{
    const [FirstName,setFirstName]=useState("")
    const rendercount=useRef(1);

    useEffect(()=>{
        rendercount.current=rendercount.current+1;
    });
    return(
        <>
        <input type="text" name="firstname" id="firstanme" onChange={(e)=>{setFirstName(e.target.value)}}></input>
        <h5>typing:{FirstName}</h5>
        <h5>component render {rendercount.current} times </h5>
        </>
    )
}
export default Final3;