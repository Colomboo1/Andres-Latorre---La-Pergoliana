import {useState, useContext} from 'react'
import {cartProductListContext,cartMetaDataContext}  from '../context/StoreProvider';
import { addDoc, collection } from 'firebase/firestore';
import db from '../firebase/Firebase'


const FormOfBuy = () => {
    const [cartArray] = useContext(cartProductListContext)
    const [{ totalPrice}] = useContext(cartMetaDataContext);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',  
        email: '',
    })
    const [order, setOrder] = useState(
        {
            buyer : formData,
            items: cartArray.map( (cartProduct)=> {
                return {
                    id: cartProduct.id,
                    title: cartProduct.title,
                    price: cartProduct.price,
                    quantity: cartProduct.quantity
                }
            }),
            total: totalPrice
        }
    );
    const [successOrder, setSuccessOrder] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {...order, buyer: formData};
        setOrder({...order, buyer: formData});
        pushOrder(prevOrder);
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes');
        const orderDoc = await addDoc(orderFirebase, prevOrder);
        console.log("orden generada: ", orderDoc.id);
        setSuccessOrder(orderDoc.id) ; 
    }

    const handleChange = (e) => {
        const {value, name} = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return(
        <div className='container-general'> 
            {successOrder ? (
                <div className='order-submmit'>
                    <h3>Orden generada correctamente</h3>
                    <p>Su numero de orden es: {successOrder}</p>
                </div>
            ) : (
                <div className='form-content'>
                    <h2>Complete los datos para finalizar compra</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='name' placeholder='Nombre' 
                            onChange={handleChange} 
                            value={formData.name}
                        />
                        <input type="number" name='phone' placeholder='Telefono' 
                            onChange={handleChange} 
                            value={formData.phone}
                        />
                        <input type="mail" name='email' placeholder='mail' 
                            onChange={handleChange} 
                            value={formData.email}
                        />

                        <button type="submit">Comprar</button>
                    </form>
                </div>
            )}
    
        </div>
    )
}

export default FormOfBuy;