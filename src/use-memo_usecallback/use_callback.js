import React, { useCallback, useState } from "react";
import Title from "./title";
import Count from "./count";
import Button from "./button";

const Parentcomp=()=>{

    const [age,setage]=useState(0);
    const [salary,setsalary]=useState(7000);

    const incrementage=useCallback(()=>{
        setage(age+1)

    },[age])
    const incrementsalary=useCallback(()=>{
        setsalary(salary+1000)

    },[salary])
    return(
        <>
         <Title/>
         
        
         <Count text={"age"} number={age}/>
         <Button clickHandler={incrementage}>increment age</Button>
         <Count text={"salary"} number={salary}/>
         <Button clickHandler={incrementsalary}>increment salary</Button>
         </>
       
    )
   
}

export default Parentcomp;