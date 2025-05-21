import { memo } from "react";
import React from "react";


const Todos=({todos,addtodo})=>{
    console.log("child render")
    return(
        <>
        <h2>
            my todos
        </h2>
        {
            todos.map((todo,index)=>{
                return(
                    <p key={index}>{todo}</p>
                )
            })

        }
        <button onClick={addtodo}>Addtodo</button>
        </>
    )

}
export default React.memo(Todos);