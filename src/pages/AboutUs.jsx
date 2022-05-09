
import { Link } from 'react-router-dom';
import React from 'react';

import image2 from "../assets/images/pergolas.jpg";
import image1 from "../assets/images/pirucha.jpg";

const AboutUs = () =>{

    return (
        <>
            <Link to={`/`}>volver</Link>
            <h1>Nosotras</h1>
            <article>
                <p>tenerlas siempre presentes, mujeres q nos inspiran y amamos...</p>
                <img src={image1} alt="Las-Pergolianas" className="imagen1"/>
                <p>porque hay una delgada linea entre el pasado y el presente, entre lo antiguo y lo moderno, entre mujeres de ayer y las mujeres de hoy... esa linea es tan delgada que nosotras somos lo que somos, gracias a lo que fueron las mujeres del ayer.</p>
                <img src={image2} alt="pirucha" className="imagen2 "/>
                <p>ellas viven en nosotras con sus colores, flores, alegria, cabezas sin techo y muchos sueños por alcanzar... muchas gracias!!</p>
            </article>
        </> 
    );
}


export default AboutUs;