import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase/Firebase';
import ItemDetail  from './ItemDetail';
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  const getProduct = async () =>{
    const docRef = doc(db, "productos", itemId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      let product = docSnap.data();
      product.id = docSnap.id;
      setProduct(product);
      setLoading(false);
    } else {
      // doc.data() will be undefined in this case
      console.log("No recupero nada");
    }
  }


  useEffect(() => {
    setLoading(true);
    getProduct();
  },[]);

  return (
    <div>
      <Link to={`/`}>volver</Link>
      {loading && <div className="spinner"></div>}
      <div className='container-items'>
        <ItemDetail {...product} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;