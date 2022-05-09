import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import db from '../firebase/Firebase';
import ItemDetail  from './ItemDetail';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    const getProduct = async () =>{
        const docRef = doc(db, "productos", itemId);
        const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let product = docSnap.data();
        product.id = docSnap.id;
        setProduct(product);
        setLoading(false);
    } else {
        alert("error al recuperar productos")
    }
  }

    useEffect(() => {
        setLoading(true);
        getProduct();
    },[]);

    return (
        <>
        <Link to={`/`}>volver</Link>
        {loading && <div className='container-progress'>CARGANDO</div>}
        <div className='container-items'>
            <ItemDetail {...product} />
        </div>
        </>
    );
};

export default ItemDetailContainer;