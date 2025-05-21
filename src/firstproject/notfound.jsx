import React from "react";
import { useNavigate} from "react-router-dom";

const Notfound=()=>{
    const Navigate=useNavigate();
    return(
        <div>
           <h1>Page Not Found</h1> 
           <button onClick={()=>Navigate("/")}>Back To Home Page</button>
        </div>
    )

}
export default Notfound;