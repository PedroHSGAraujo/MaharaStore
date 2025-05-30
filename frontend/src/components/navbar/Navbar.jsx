import React, { useContext, useRef, useState } from 'react';
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import nav_dropdown from '../assets/nav_dropdown.png'

export const Navbar = () => {

    const [menu, setMenu] = useState("loja");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link to='/'>
                    <img onClick={() => { setMenu("loja") }} src={logo} alt="" />
                </Link>
                <p></p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() => { setMenu("loja") }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>Loja</Link>{menu === "loja" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("colares") }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/colares'>Colares</Link>{menu === "colares" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("pulseiras") }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/pulseiras'>Pulseiras</Link>{menu === "pulseiras" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("aneis") }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/aneis'>Anéis</Link>{menu === "aneis" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/carrinho'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}