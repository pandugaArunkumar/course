import React, { useState } from "react";

 const useCounter=(initialvalue=0)=>{
    const [count,setcount]=useState(0);

    const Increment=()=>{
        setcount(count+1);
    }
    const Decrement=()=>{
        setcount(count-1);
    }
    const Reset=()=>{
        setcount(initialvalue)
    };
    // return [count,Increment,Decrement,Reset];
    return(
        <>
        <h3>count-{count}</h3>
        <button onClick={Increment}>increase</button>
        <button onClick={Decrement}>decrease</button>
        <button onClick={Reset}>Reset</button>
        </>
    )
 }
 export default useCounter;