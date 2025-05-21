import { useState } from "react";

const Information=()=>{
    const [firstName,setfirstName]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const handlesubmit=(e)=>{
       e.preventDefault()

       let userobj={
        firstName:firstName,
        email:email,
        password:password
       };
       console.log(userobj)
    }

    return(
        
            <form className="frm" onClick={handlesubmit}>
                <div className="conta">                <input type="text" id="name" placeholder="Name" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
                <input type="email" id="mail" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}></input>
                <input type="password"id="password" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <button type="submit">Submit</button></div>

            </form>
       
    )
}
export default Information;