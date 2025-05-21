import { useState,useEffect } from "react";

const Index4=()=>{
    const [count,setcount]=useState(0);

    useEffect(()=>{
        console.log("this is useeffect")
    })
    return(
        <div className="divv">
        <h2>Learn useEffect in react</h2>
        <h2>{count}</h2>
        <button onClick={()=>{
            setcount(count+1)
        }}>+</button>
        </div>
    )
}
export default Index4;