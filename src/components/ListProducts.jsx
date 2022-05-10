import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, } from 'firebase/firestore'
import db from '../firebase/Firebase'
import Item from './Item'
import "../scss/styles/ListProduct.scss"


const ListProducts = ({getPromos}) => {
    const [loading , setLoading] = useState(true);
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try{
            const itemsCollection = collection(db, 'productos');
            const productosSnapshot = await getDocs(itemsCollection); 
            const productList = productosSnapshot.docs.map((doc) => {
                let product = doc.data();
                product.id = doc.id;
                return product;
            });
            return productList;

        }catch(err){
            return [];
        }
    } 

    useEffect( () => {
        setProducts([]);
        setLoading(true);
        getProducts().then( (productos) => {
            setLoading(false);
            if(category){
                filterProductByCategory(productos, category);
            }else if(getPromos){
                filterProductByCategory(productos, "promo");
            }else{
                setProducts(productos);
            }
        })
    }, [category])

    const filterProductByCategory = (array , category) => {
        return array.map( (product, i) => {
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
        })
    }


    return(
        <div>
            <h2>{category}</h2>
            {loading && <div className="spinner"></div>}
            <div className='container-items'>
                {products.map(( product ) => 
                    <Item 
                        key={product.id}
                        id={product.id} 
                        name={product.name} 
                        image={product.image}
                        price={product.price} 
                    />
                )} 
            </div>
        </div>
    ) 
}

export default ListProducts;