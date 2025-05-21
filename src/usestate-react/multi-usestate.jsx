import { useState } from "react";
  function Carinf(){
    const [brand,setbrand]=useState("ford")
    const [model,setmodel]=useState("mustang")
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    
    return(
        <div>
            <h1>my {brand}</h1>
            <p>it is {color} {model} from {year} </p>
        </div>
    )
  }
  export default Carinf;