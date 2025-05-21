import React from "react";
import { Link } from "react-router-dom";
import userData from "./userData";




const Users=()=>{
    return(
        <div>
            <h2>USERS</h2>
            <div className="card">
              {
                userData.map((eachUser)=>{
                    const {id,name,email}=eachUser;
                    return(
                        <Link to={`/users/${id}`} key={id}>
                        <article className="userdata">
                            <h2>{name}</h2>
                            <h3>{email}</h3>
                            
                        </article>
                        </Link>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Users;