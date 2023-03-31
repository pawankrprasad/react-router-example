import { Route, Routes } from 'react-router-dom';

import Page1 from './../pages/Page1';
import Page2 from './../pages/Page2';
import Page3 from './../pages/Page3';
import Home from './../pages/Home';
import NotFound from './../pages/NotFound';
import Products from './../pages/Products';
import ProductList from './../pages/ProductList';
import AddProduct from './../pages/AddProduct';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';

const AppRoute = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>} />

            <Route path='/' element={<Home />} />
            <Route path='/page1' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path='/page3' element={<Page3 />} />
            <Route path='/products' element={<Products />}>
                <Route path="list" element={<ProductList />} />
                <Route path="add" element={<AddProduct />} />
                
            </Route>
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoute;