import React,{ createContext , useState, useEffect} from "react";

 // estructura inicial del carrito 
const cartProductList=[];

const cartMetaData={
    totalQuantity:0,
    totalPrice:0, 
};

const cartProductListContext = createContext(cartProductList);
const cartMetaDataContext = createContext(cartMetaData);

const StoreProvider = ({ children }) => {
    // es un array
    const [ cartArray, setCartArray ] = useState(cartProductList);
    //es un objeto
    const [ cartMeta, setCartMeta ] = useState(cartMetaData);
    const newArray = [...cartArray];

    const addToCard = (product) =>{
        const index = cartArray.findIndex(el => el.id === product.id);  
        //si esta dentro del array
        if (index >= 0){
            //modificar
            newArray[index] = product;
        }else{
            //si es producto nuevo
            newArray.push(product);
        }
        setCartArray(newArray);  
    }

    const removeFromCart = (id) =>{
        const index = cartArray.findIndex(el => el.id === id);    
        if (index >= 0){
            newArray.splice(index, 1);   
        }
        setCartArray(newArray);  
    }

    useEffect ( () => {
            const totalPrice = cartArray.reduce((prev, curr) => prev + (curr.quantity * curr.price), 0);
            const totalQuantity = cartArray.reduce((prev, curr) => prev + curr.quantity , 0);
            setCartMeta({totalQuantity, totalPrice});
    },[cartArray])  

    return (

    <cartProductListContext.Provider value={[cartArray, addToCard, removeFromCart]}>
        <cartMetaDataContext.Provider value={[cartMeta, setCartMeta]}>

            {children}

        </cartMetaDataContext.Provider>
    </cartProductListContext.Provider>
    );
}

export default StoreProvider;
export {cartProductListContext,cartMetaDataContext};
