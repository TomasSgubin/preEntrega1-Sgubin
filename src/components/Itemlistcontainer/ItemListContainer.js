import React,{useEffect, useState} from 'react';
import './style.css';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const products = [
    {id:1, image: "https://wdixital.com/wp-content/uploads/apple-macbook-a1398.jpg", category:"notebooks", title: "Notebook Apple"},
    {id:2, image: "https://wdixital.com/wp-content/uploads/iphone8_500x500.jpg", category:"celulares", title: "Celular"},
    {id:3, image: "https://images.samsung.com/is/image/samsung/p6pim/ar/un43t5300agczb/gallery/ar-fhd-t5300-un43t5300agczb-356627272?$650_519_PNG$", category:"televisores", title: "Televisor"},
    {id:4, image: "https://http2.mlstatic.com/D_NQ_NP_661767-MLA49535290322_032022-O.webp", category:"celulares", title: "Celular"},
    {id:5, image: "https://http2.mlstatic.com/D_NQ_NP_724772-MLA50878311168_072022-O.webp", category:"televisores", title: "Televisor"},
    {id:6, image: "https://http2.mlstatic.com/D_NQ_NP_823011-MLA42939608633_072020-O.webp", category:"televisores",  title: "Televisor"},
    {id:7, image: "https://http2.mlstatic.com/D_NQ_NP_805951-MLA50865156506_072022-O.webp", category:"notebooks",  title: "Notebook"},
    {id:8, image: "https://http2.mlstatic.com/D_NQ_NP_945528-MLA49251126700_032022-O.webp", category:"notebooks", title: "Notebook"},
    {id:9, image: "https://http2.mlstatic.com/D_NQ_NP_917545-MLA50401654103_062022-O.webp", category:"celulares", title: "Celular"},
];

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData (res.filter(product => product.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
    }, [categoriaId])

    

    return(
        <>
        <ItemList data={data} />
        </>
    )
};

export default ItemListContainer;