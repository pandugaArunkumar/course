import React,{useEffect,useRef,useState} from "react";

const Final4=()=>{
    const [firstname,setfirstname]=useState(" ")
    const inputDom=useRef("")

    useEffect(()=>{
        console.log(inputDom)
    });
    const focus=()=>{
        inputDom.current.focus();
    }

    return(
        <>
        <input ref={inputDom}
        type="text"
        name="firstname"
        onClick={(e)=>{
            setfirstname(e.target.value)
        }}></input>
        <h4>typing:{firstname}</h4>
        <button onChange={focus}>focus</button>
        </>
    )
}
export default Final4;