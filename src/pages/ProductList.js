import { Link } from "react-router-dom";

const products = [
    {id:100, name:"Mobile Phone", price: "$200"},
    {id:101, name:"Mobile Phone", price: "$100"},
    {id:102, name:"Mobile Phone", price: "$300"}
]

const ProductList = () =>{
    return(
        <>
        {products.map(p=>(
            <div key={p.id}>
              <Link to={`/productdetail/${p.id}`}>{p.id}</Link>  {`${p.id} ${p.name} ${p.price}`}
            </div>
            
        ))}
        </>
    )
}

export default ProductList;