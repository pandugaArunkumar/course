import React from 'react';
 
const Initialstate={
    firstname:"arun",
    lastname:"yadav",
    email:"charan@gmail.com"
};

export const UserContext=React.createContext();
export const UserContextProvider=({user})=>{
    return(
        <UserContext.Provider value={Initialstate} >{user} </UserContext.Provider>
    )
}

