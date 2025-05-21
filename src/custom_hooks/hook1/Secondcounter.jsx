import React from "react";
// import useCounter from "./usecounter";


const Secondcounter=()=>{
    const [count,Increment,Decrement,Reset]=useCounter(10);
    return(
        <>
          <h2>count-{count}</h2>
        <div>
           <button onClick={Increment}>increase</button>
           <button onClick={Decrement}>decrease</button>
           <button onClick={Reset}>Reset</button>
        </div>
        </>
    )

}
export default Secondcounter;