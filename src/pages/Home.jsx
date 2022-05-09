import React from 'react';
import ListProducts from '../components/ListProducts';


const Home = () =>{
    return (
        <div className="home-container "> 
            <h1>La pergoliana</h1>
            <h2>Batas y Kimonos confección artesanal diseñada para cuerpos reales</h2>
            <div className="container-logo">
                <img src="../assets/images/Logo.png" alt="piruchacon con flores" className="logo"/>
                <span>Una prenda que elegirías como piel...</span>
            </div>
            <span>Productos con descuento</span>
            <ListProducts getPromos={true} />     
        </div>
    
    );
};
   
export default Home;