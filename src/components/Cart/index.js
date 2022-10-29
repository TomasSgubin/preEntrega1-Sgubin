import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import './style.css';
import swal from 'sweetalert';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Tomas Sgubin',
            email: 'tomisgu@gmail.com',
            phone: '1130254791',
            adress: 'Avenida Siempre Viva'
        },
        items: cart.map(producto => ({ id: producto.id, title: producto.title, price: producto.price, quantity: producto.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => swal("Compra realizada! Su numero de orden es:", id))
    }

    if(cart.length === 0) {
        return (
            <>
            <div className='contenido1'>
            <p className='titulo1'>No hay elementos en el carrito</p>
            <Link to='/' className='titulo2'>Realizar compra</Link>
            </div>
            </>
        );
    }

    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <div className='contenido2'>
        <p>
            Total: ${totalPrice()}
        </p>
        <button onClick={handleClick}>Emitir orden de compra</button>
        </div>
        
        </>
    )
}

export default Cart;