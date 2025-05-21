import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar=()=>{

    const {user,logout}=useAuth();
   
    return(
        <div>
            <nav className="navlink">
                <NavLink to="/">HOME</NavLink>
                <NavLink to='/about' >ABOUT</NavLink>
                <NavLink to='/contact' >CONTACT</NavLink>
                <NavLink to='/project'>PROJECT</NavLink>
                <NavLink to='/users'>USERS</NavLink>
               
                {
                  user ?(
                    <NavLink to="/logout" onClick={logout}>LOGOUT</NavLink>
                  ):(
                     <NavLink to="/login">LOGIN</NavLink>
                  )
                 
                }
            </nav>
            
        </div>
    )
}
export default Navbar;