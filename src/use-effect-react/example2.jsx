import { useState,useEffect } from "react";

const Timer=()=>{
    const [count,setcount]=useState(0);

    useEffect(()=>{
        let timer=setTimeout(() => {
           setcount(()=>
            count+1) ;
        },1000);
        return()=> clearTimeout(timer)
    },[])
    return(
        <div> 
            <h3>i have render {count} times !</h3>
        </div>
    )
}
export default Timer;