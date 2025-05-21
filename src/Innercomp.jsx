import React from 'react';

const Innercomponent=()=>{
   return(
   <h2>innercomponent</h2> 
   )
}
const Printname=()=>{
    return(<Innercomponent/>)
}

const App1=()=>{
    const user={
        firstname:"arun",
        middlename:"kumar",
        lastname:"yadav"
    }
    return(
        <section>
            <Printname/>
            </section>
    )
}
export default App1;