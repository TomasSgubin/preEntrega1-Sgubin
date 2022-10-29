import './item.css';

import { Link } from 'react-router-dom';
import React from 'react';


const Item = ({info}) => {
    
    return (
        <Link to={`/detalle/${info.id}`} className='product'>
            <img src={info.image} alt=''/>
            <div className='title1'>
            <p>{info.title}</p>
            <p>${info.price}</p>  
            </div>
        </Link>
    );
}

export default Item;