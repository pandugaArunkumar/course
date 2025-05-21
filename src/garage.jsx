import React from 'react'
function Car(){
    return <h1>this is maruthi car</h1>
}
function Garage(){
    return( <>
    <Car/>,
    <Car/>,<Car/>,<Car/>
    </>)
}
export default Garage;