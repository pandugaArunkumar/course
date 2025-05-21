import React,{useReducer,useEffect, useState} from "react";


const Reducer=(state,action)=>{
    if(action.type==="UPDATE_USER_DATA"){
        return {
            ...state,
            usersData:action.payload,
        }

    }
    if(action.type==="LOADING"){
        return {
            ...state,
            isloading:action.payload
        }

}

 if(action.type==="DELETE_USER"){
    const newUsers=state.usersData.filter((eachUser)=>eachUser.id !==action.payload);
    return{
        ...state,
        usersData:newUsers
    }
 }
 if(action.type==="EDIT_USER"){
    return{
        ...state,
        isEditing:action.payload
    }
 }
 if(action.type==="UPDATE_USER"){
    const newUsers=state.usersData.map((eachUser)=>{
        if(eachUser.id===action.payload.id){
            return {
                ...eachUser,
                name:action.payload.name,
                email:action.payload.email,
            };
        }else{
            return eachUser;
        }
        
    })
    return{
        ...state,
        usersData:newUsers,
        isEditing: { status: false, id: '', name: '', email: '' },
    }
 }
    return state; 
}
    

const Finals2=()=>{
    const fetchUsersData=async (URL)=>{
        dispatch({type:"LOADING",payload:true});
        dispatch({type:"ERROR",payload:{status:false,message:""}})
    try{
        const response = await fetch(URL);
        const Data= await response.json();
        dispatch({type:"UPDATE_USER_DATA",payload:Data})
        dispatch({type:"LOADING",payload:false})
        dispatch({type:"ERROR",payload:{status:false,message:""}});
    }catch(error){
        console.log(error)
        dispatch({type:"LOADING",payload:false})
        dispatch({type:"ERROR",payload:{status:false,message:error.message}});
    }
    }
    useEffect(()=>{
        fetchUsersData("https://jsonplaceholder.typicode.com/users")
    },[])
    
const initialstate={
    usersData:[],
    isloading:false,
    isError:{status:false,msg:" "},
    isEditing:{status:false ,id:'',name:'',email:''}
};

   


    const [state,dispatch]=useReducer(Reducer,initialstate);

    const handleDelete=(id)=>{
        dispatch({type:"DELETE_USER",payload:id})
    }
    const updateData=(id,name,email)=>{
        dispatch({
            type:"UPDATE_USER",
            payload:{id,email,name}
        })
    };

    // const handleEdit=(id)=>{
    //     dispatch({type:"EDIT_USER",payload:{status: true , id:id }})
    // }

    if(state.isloading){
        return(
            <div>
                <h2>loading......</h2>
            </div>
        )
    }
    return(
        <div>
        <h1>users information-</h1>
        {
            state.isEditing?.status && <EditFormContainer id={state.isEditing.id} comtitle={state.isEditing.name} comemail={state.isEditing.email} updateData={updateData}/>
        }
        {state.usersData.map((eachuser)=>{
            const {id,name,email}=eachuser;
            return(
                <div key={id} style={{background:"lightpink"}}>
                  <h2>{name}</h2>
                  <p>{email} </p>
                  <button onClick={()=>handleDelete(id)}>delete</button>
                  <button onClick={()=>dispatch({type:"EDIT_USER" , payload: { status: true, id: id, name: name, email },})}>Edit</button>

                </div>
            )

        })}
        
        </div>
    )
}

const EditFormContainer=({id,comtitle,comemail,updateData})=>{

    const [title,setTitle]=useState(comtitle || " ")
    const [email,setEmail]=useState(comemail || " ")
    return(
        <>
        <form>
            <input type="text" name="name" id="name" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button onClick={() => updateData(id, title, email)}>update data</button>
        </form>
        </>
    )

}
export default Finals2;