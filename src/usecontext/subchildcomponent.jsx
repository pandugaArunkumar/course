import { useContext } from "react";

import { UserContext } from "./use-context1";

const SubChildComponent =()=>{
    const data=useContext(UserContext)
    console.log(data);

    const {firstname,lastname,email}=data;

    return(
        <div>
            <h3>subchild component</h3>
            <div>firstname:{firstname} </div>
            <div>
                lastname:{lastname}
            </div>
            <div>
                email:{email}
            </div>
        </div>
    )
}
export default SubChildComponent;