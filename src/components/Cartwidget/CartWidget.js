import React from 'react';
import './style.css';
import carrito from './carrito.png';
import { useCartContext } from '../../context/CartContext';

 export const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return(
        <div>
           <img className="carrito" src={carrito}/>
           <span>{totalProducts() || ''}</span>
        </div>
    );
}

export default CartWidget;

