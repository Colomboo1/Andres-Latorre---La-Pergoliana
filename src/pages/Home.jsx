import React from 'react';
import ListProducts from '../components/ListProducts';
import "../scss/styles/Home.scss"

const Home = () =>{
    return (
        <div className="home-container"> 
            <h1>La pergoliana</h1>
            <h2>Batas y Kimonos confección artesanal diseñada para cuerpos reales</h2>
            <div className="conteiner-logo">
                <img src={"https://drive.google.com/uc?export=view&id=18rROXB3Kkn4cZFTrvmSD6c7WHu2fp3gE" }alt="piruchacon con flores" className='pirucha'/>
                <span>Una prenda que elegirías como piel...</span>
            </div>
            <h2>Productos con descuento</h2>
            <ListProducts getPromos={true} />     
        </div>
    
    );
};
   
export default Home;