import { Outlet } from "react-router-dom";

const Products = () =>{
    return(
        <>
            <h1> Product Management</h1>
            <Outlet/>
        </>
    )
}

export default Products;