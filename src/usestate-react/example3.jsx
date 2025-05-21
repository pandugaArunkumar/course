import { useState } from "react";

const Index3=()=>{
   
    const [list,setlist]=useState([])
    const [message,setMessage]=useState({
        Text:"",
        id:""
    });
    const changeMessage=(e)=>{
        setMessage({
            ...message,
            Text:e.target.value
        })
    }

    const handlesubmit=(e)=>{
        e.preventDefault();

        const todos={
            Text:message.Text,
            id: new Date().getTime().toString()
        }
        setlist([...list,todos]);
        setMessage({
            Text:"",
            id:""
        });
    }
     const handledelete=(id)=>{
        let todos=list.filter((eachItem)=>{
            return eachItem.id!=id;
        });
        setlist(todos)

     }
    return(
        <div>
            <form>
                <input type="text"
                name="message"
                id="message"
                placeholder="enter some text "
                value={message.Text}
                onChange={changeMessage}>
                </input>
                <button type="submit"
                onClick={handlesubmit}>ADD</button>
            </form>
            <hr />
            {
                list.length===0 && <h3>there is no items to delete</h3>
            }
            <ul>
                {
                    list.map((eachItem)=>{
                    const {Text,id}=eachItem;
                        return(
                            <li key={id}>
                               <span>{Text}</span>
                               <button>EDIT</button>
                               <button onClick={()=>handledelete(id) }>DELETE</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}
export default Index3;