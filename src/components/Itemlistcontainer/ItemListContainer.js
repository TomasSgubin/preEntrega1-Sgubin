import React, {useEffect, useState} from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import './style.css';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
// import Title from '../Title';



export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId));
        getDocs(queryFilter)
            .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data() })))) 
        } else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        }
    }, [categoriaId])

    

    return (
        <>
        <ItemList data={data} />
        </>
    );
    }
    

export default ItemListContainer;