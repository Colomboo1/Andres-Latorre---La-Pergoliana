import React from 'react';
import ItemCount from "./ItemCount"
import "../scss/styles/ItemDetail.scss"



const ItemDetail = ({
    id,
    name,
    category,
    image,
    description,
    price,
    stock
}) => {
    return (
        <div className="detail-row">
            <img src={image} alt={`${id}-${name}`} className="detail-img" />
            <section className="detail-data">
                <h2>{description}</h2>
                <h2><span>$</span>{price}</h2>
                <ItemCount id={id} stock={stock} price={price} name={name} image={image}/>
            </section>
        </div>
    );
};

export default ItemDetail;
