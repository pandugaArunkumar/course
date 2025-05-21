import React from 'react';
let Car=(props)=>{
    return <h2>hello this car in {props.CarInf.color} color!</h2>
}
let Car1=()=>{
    let CarInf={color:"red",
        brand:"ford",
        year:"2020"
    }
       
    return <Car CarInf={CarInf}/>
}
export default Car1;