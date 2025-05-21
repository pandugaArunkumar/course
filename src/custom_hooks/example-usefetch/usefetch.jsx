
import { useState,useEffect } from "react";

const useFetch=(URL)=>{
    
        const [data,setdata]=useState([])
        const [isloading,setisloading]=useState(true)
        const [iserror,setiserror]=useState(false)
    
        const makeAPICall=async(URL)=>{
            setiserror(false)
            setisloading(true)
            try{
                const response=await fetch(URL)
                const comingdata=await response.json();
                setdata(comingdata)
                console.log(comingdata)
               
                setiserror(false)
                setisloading(false)
            }catch(error){
                
                setiserror(true)
            }
    
        }
        useEffect(()=>{
            makeAPICall()
        },[URL])

     return [data,isloading,iserror]
}
export default useFetch;