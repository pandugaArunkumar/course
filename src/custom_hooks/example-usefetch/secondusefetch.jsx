
import useFetch from "./usefetch";
const URL="https://jsonplaceholder.typicode.com/posts"

const SecondFetch=()=>
{
   const [postdata,isloading,iserror]=useFetch(URL)

    if(isloading){
        <h2>wait for a second</h2>
    }
    if(iserror){
        <h3>something is wrong...</h3>
    }
    return(
        <><h2>POSTS</h2>
       <ul> {
            postdata.map((eachpost)=>{
                return(
                    <li key={eachpost.id}>{eachpost.title}</li>
                )
            })
        }</ul>
        </>
    )
}
export default SecondFetch;
