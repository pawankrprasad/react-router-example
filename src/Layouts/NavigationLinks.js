import { Link, NavLink } from 'react-router-dom';

const NavigationLinks = () =>{

    const NavCallBack = ({isActive})=>  isActive ? "active":"";

    return(
        <ul>
        <li><NavLink to="/login" className={NavCallBack}>Login</NavLink></li>
        <li><NavLink to="/" className={NavCallBack}   >Home</NavLink></li>
        <li><NavLink to="/page1" className={NavCallBack}>Page 1</NavLink></li>
        <li><NavLink to="/page2" className={NavCallBack}>Page 2</NavLink></li>
        <li><NavLink to="/page3" className={NavCallBack}>Page 3</NavLink></li>
        <li><NavLink to="/page4" className={NavCallBack}>Page 4</NavLink></li>
        <li><NavLink to="/products" className={NavCallBack} end>Product</NavLink></li>
        <li><NavLink to="/products/list" className={NavCallBack}>Product List</NavLink></li>
        <li><NavLink to="/products/add" className={NavCallBack}>Add Product</NavLink></li>
      </ul>
    )
}

export default NavigationLinks;