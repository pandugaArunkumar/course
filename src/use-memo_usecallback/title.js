  import React from "react"
  const Title=()=>{
        console.log("title rendered")
        return<h1>USE CALLBACK AND REACT.MEMO</h1>
    }
    export default React.memo(Title);