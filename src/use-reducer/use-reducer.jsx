import React,{ useReducer } from "react"

const Reducer=(state,action)=>{
    if(action.type==="DELETE_PERSON"){
        const newperson=state.data.filter((eachperson)=>{
            return eachperson.id !== action.payload;
        })
        return{
            ...state,
            data:newperson,
            length:state.length-1,
        }
    }
    


    return state;

}

const Finals=()=>{
    const initialstate={
        data:[
            {id:"1234",firstname:"arun",lastname:"kumar",email:"arun@gmail.com"},
            {id:"123456",firstname:"arsha",lastname:"sree",email:"arun12@gmail.com"}
        ],
        length:2
    }
    const [state,dispatch] = useReducer(Reducer,initialstate)

    const handledelete=(id)=>{
        dispatch({
            type:"DELETE_PERSON",
            payload:id
        }
        );
       
    }
    const handleedit=(id)=>{
        dispatch({
            type:"UPDATE_PERSON",
            payload:id
        });
    }

    return(
        <div>
            <h1>current users lenght: {state.length} </h1>
            {
                state.data.map((eachitem)=>{
                   const {id,firstname,lastname,email}=eachitem;
                   return(
                    <div key={id} >
                       <h2>{firstname} {lastname}</h2>
                       <p>{email}</p>
                       <button onClick={()=>handledelete(id)}>delete</button>
                       <button onClick={()=>handleedit(id)}>edit</button>
                       
                    </div>
                   )
                })
            }
        </div>
    )
}


export default Finals;