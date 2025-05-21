import { useState } from "react";

const FavoriteColor=()=>{
    const [color,setcolor]=useState("");
    return (<div><h1>My favorite color is {color}</h1>
        <button onClick={()=>{
            setcolor("red")
        }}> RED</button></div>)
    
}
export default FavoriteColor;