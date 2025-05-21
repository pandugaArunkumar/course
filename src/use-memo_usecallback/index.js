import React, { useCallback, useState } from "react";
import Todos from "./todos";

const Apps=()=>{
    const [count,setcount]=useState(0);
    const [todos,settodos]=useState([]);

    const increment=()=>{
        setcount((c)=>c+1);
    }
    const addtodo=useCallback(()=>{
        settodos((t)=>[...t,"new todo"]);
    },[todos])
    return(
        <>
        <Todos todos={todos} addtodo={addtodo} />
        <hr></hr>
        <div>count:{count}
        <button onClick={increment}>+</button></div>
        </>
    )
}
export default Apps;