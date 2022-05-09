import React,{useState, useContext} from "react";
import {cartProductListContext}  from '../context/StoreProvider';


const [cartArray,setCartArray] = useContext(cartProductListContext)

const searchParam =(el => el.id === id) 

const currentId = cartArray.find(searchParam);
const newArray = [...cartArray];

const modifyCart = (remove) =>{
    
    if (currentId){//si esta dentro del array
      const index = cartArray.findIndex(searchParam);
      console.log("esta repetido y el index",index);
      
      if (quantity === 0 || remove === true){//eliminar
        console.log("elimina ");
        newArray.splice(index, 1);
        
      }else{//modificar
        console.log("modifica", index);
        // no es afectado en los dos de laa misma manera
        newArray[index] = {quantity};
      }
     
    }
    else{//si es producto nuevo
      newArray.push({id, quantity, price, name, image});
      console.log("carga nuevo");
    }
    setCartArray(newArray);  

  }

  export  {modifyCart};