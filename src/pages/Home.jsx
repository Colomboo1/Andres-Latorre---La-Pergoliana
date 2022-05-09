import React from 'react';
import ListProducts from '../components/ListProducts';
import { Navigate } from 'react-router-dom';

import Logo from "../assets/images/Logo.png"



const Home = () =>{
    return (
        <div className="home-container "> 
            <h1>La pergoliana</h1>
            <h2>Batas y Kimonos confección artesanal diseñada para cuerpos reales</h2>
            <div className="container-logo">
                <img src={Logo} alt="" className="logo"/>
            </div>
            <span>Una prenda que elegirías como piel...</span>
            <ListProducts getPromos={true} />     
        </div>
    
    );
};
  
  
export default Home;