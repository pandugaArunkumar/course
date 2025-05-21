import React from "react";
import { Link, Outlet } from "react-router-dom";
const Project=()=>{
    return(
        <div>
             <h3>Projects</h3>
             <nav className="navi">
             <Link to="feature" >FEATURE PROJECTS</Link>
             <br />
             <br />
            
             <Link to="new">NEW PROJECTS</Link>
             <Outlet/>
             </nav>
            
             </div>
       
        
    )
}
export default Project;