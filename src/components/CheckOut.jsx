import React, {useContext } from 'react';
import { Link } from 'react-router-dom';
import {cartProductListContext,cartMetaDataContext}  from '../context/StoreProvider';

const CheckOut = () => {
  // traemos los datos del context
     const [cartArray, , removeFromCart] = useContext(cartProductListContext)
     const [{totalQuantity, totalPrice}] = useContext(cartMetaDataContext);


  // uso de rendering condicional para mostrar los items del carrito en la vista o el mensaje de que no hay items agregados con el link a la home
    return(
        totalQuantity > 0 ? (
        <>
            <h1>ITEMS</h1>
            <div>
            {cartArray.map((item) => (
                <article key={item.id}>
                    <h2>{item.name}</h2>
                    <img src={item.image} alt={item.name} height="100px" />
                    <p>Precio individual: <span>$</span>{item.price}</p>
                    <p>Cantidad: {item.quantity} items</p>
                    <p>Subtotal: <span>$</span>{item.quantity*item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>ELIMINAR ITEM</button>
                </article>
                )
            )}
            </div>
            <h1>TOTAL: <span>$</span>{totalPrice}</h1>
            <a href="https://www.mercadolibre.com.ar/">finalizar compra</a>
        </>
        ) : (
        <>
            <h1>NO HAY ITEMS EN TU CARRITO</h1>
            <Link to="/">IR A COMPRAR</Link>
        </>
        )
    )
}
    export default CheckOut;