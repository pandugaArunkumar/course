import { useEffect, useState } from "react";

const Index=()=>{
    const [Count,setCount]=useState(0);
    let addition=()=>{
        setCount(Count+2);
    
    
    }
    let subtraction=()=>{
        setCount(Count-1)
    }

    return(
        <div className="buttons">
            <button className="Button" onClick={addition}>+</button>
            <span>count: {Count}</span>
            <button className="Button2" onClick={subtraction}>-</button>
        </div>
    )
}
export default Index;