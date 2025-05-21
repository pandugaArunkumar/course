import { useState } from "react";

const Index1=()=>{
    
    const [data,setdata]=useState({firstname:"arun",
        lastname:"arsha",
        age:20});

    const changefn=()=>{
        setdata({
            ...data,
            firstname:"harsha"})
    }
    const changeln=()=>{
        setdata({
            ...data,
            lastname:"sree"})
    }

    return(
        <div>
            <p>my firstname is : {data.firstname}</p>
            <button onClick={changefn}>change firstName</button>
            <p>my lastname is : {data.lastname}</p>
            <button onClick={changeln}>change lastname</button>
        </div>
    )
}
export default Index1;