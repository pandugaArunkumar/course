import React from 'react'
const Time=()=>{
    return(
        <section className='container'> 
            <h2> time is : {new Date().toLocaleTimeString()}</h2>
        </section>
    )

}

export default Time;