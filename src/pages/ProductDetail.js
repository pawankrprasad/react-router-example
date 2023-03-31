import { useParams } from 'react-router-dom';

const ProductDetail = () =>{
   const {id} =  useParams();
    return(
        <h1>PRoduct Details for {id}</h1>
    )
}

export default ProductDetail;