import React,{useState, useContext} from "react";
import {cartProductListContext}  from '../context/StoreProvider';
import { GoDiffAdded,GoDiffRemoved } from "react-icons/go";
import "../scss/styles/ItemCount.scss"

const ItemCount = ({id, stock, price, name, image}) => {
  
  const [quantity, setQuantity] = useState(0);
  
  
  const [, addToCard] = useContext(cartProductListContext)
  
  const addstock = () => {
    setQuantity(quantity +1);
  
  };
  
  const remStock = () => {
    setQuantity(quantity -1)
  };
  

  return (
    <div className="quantity">
      <div className="stock">
        <button className="btn-rem" onClick={remStock} disabled={ quantity === 0} ><GoDiffRemoved size="3em"/></button>
        <div>
          <p>cantidad: {quantity}</p>
          <button className="btn-buy" onClick={() => addToCard({id, price, name, image,quantity})} disabled={ stock === 0 || quantity  === 0 } >agregar al carrito</button>
        </div>
        <button className="btn-add" onClick={addstock} disabled={ quantity === stock }><GoDiffAdded size="3em"/></button>
      </div>
    </div>  
  );
}


export default ItemCount;
