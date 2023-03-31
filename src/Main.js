import { useContext } from "react";
import AppContext from "./context/AppContext";

const Main = () =>{

   const ctx = useContext(AppContext)
    return(
        <>
        <h1>Main Component</h1>

        <button onClick={()=> ctx.changeName("Name Changed from Main Component")}>Change Name</button>
        {ctx.name}
        </>
        
    )
}

export default Main;