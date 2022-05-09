import React from 'react';
import "../scss/styles/Item.scss"
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, price }) => {
    return (
        <div className= "item">
        <Link to={`/product/${id}`}>
            <div className="item_card">
            <p>{name}</p>
            <p>
                <img src={image} alt={name} className={'small-img'} />
            </p>
            <p><span>$</span>{price}</p>
            
            </div>
        </Link>
        </div>
    );
};

export default Item;

