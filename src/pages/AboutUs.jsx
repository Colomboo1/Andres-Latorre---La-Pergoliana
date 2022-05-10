
import { Link } from 'react-router-dom';
import React from 'react';
import "../scss/styles/AboutUs.scss"

const AboutUs = () =>{

    return (
        <>
            <Link className='Return' to={`/`}>volver</Link>
            <h1>Nosotras</h1>
            <article>
                <p>Tenerlas siempre presentes, mujeres q nos inspiran y amamos...</p>
                <img src={"https://drive.google.com/uc?export=view&id=1vi3SP13IpSSh55dguS3oidvMseTIzRUH"} alt="Las-Pergolianas" className="imagen"/>
                <p>Porque hay una delgada linea entre el pasado y el presente, entre lo antiguo y lo moderno, entre mujeres de ayer y las mujeres de hoy... esa linea es tan delgada que nosotras somos lo que somos, gracias a lo que fueron las mujeres del ayer.</p>
                <img src={"https://drive.google.com/uc?export=view&id=1lwAtjWEZO_XTnsdIqWYxcEfUVQd5iGSU"} alt="pirucha" className="imagen"/>
                <p>Ellas viven en nosotras con sus colores, flores, alegria, cabezas sin techo y muchos sueños por alcanzar... muchas gracias!!</p>
                <span>Mariana Y Soledad</span>
                <div className='container-images'>
                    <img src={"https://drive.google.com/uc?export=view&id=1spEjd0bmfhQ4ZlaRv7M7agJsjpYMNAvD"} alt="mariana" className="imagen "/>
                    <img src={"https://drive.google.com/uc?export=view&id=1tasy11XIwotoqx-UnafBYt5kSBDGRKno"} alt="soledad" className="imagen "/>
                </div>
            </article>
        </> 
    );
}


export default AboutUs;