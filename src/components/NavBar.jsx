import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Cart from './Cart';
import '../scss/styles/NavBar.scss';
import isoLogo from "../assets/images/isoLogo.svg"


//carga de navbar de manera dinamica
const NavBar = () => {
    const categories = [
        { id: '1000', address: '/products', text: 'Productos' },
        { id: '1001', address: '/category/kimonos', text: 'kimonos' },
        { id: '1002', address: '/category/batas', text: 'batas' },
        { id: '1003', address: '/category/pañuelos', text: 'pañuelos' },
        { id: '1004', address: '/AboutUs', text: 'nosotras' }
    ];

    return (
        <div className="logo-navbar">
            <div className="container-logo">
                <Link to={`/`}>
                    <img src={isoLogo} alt="Logo" className="isologo"/>
                </Link>
            </div>
            <nav className="menu">
                {categories.map((cat) => {
                    return (
                        <NavLink
                        key={cat.id}
                        to={cat.address}
                        className="link"
                        >
                        {cat.text}
                        </NavLink>
                    );
                })}
                <Cart/>     
            </nav>
        </div>
    );
};

export default NavBar;