import ItemDetail from '../ItemDetail';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const products = [
    {id:1, image: "https://wdixital.com/wp-content/uploads/apple-macbook-a1398.jpg", category:"notebooks", price: "$" + 10000, marca: "Apple", title: "Macbook"},
    {id:2, image: "https://wdixital.com/wp-content/uploads/iphone8_500x500.jpg", category:"celulares", price: "$" + 10000, marca: "Apple", title: "Iphone 8"},
    {id:3, image: "https://http2.mlstatic.com/D_NQ_NP_886670-MLA44628265236_012021-O.webp", category:"televisores", price: "$" + 10000, marca: "Samsung", title: "Televisor Samsung 4k"},
    {id:4, image: "https://http2.mlstatic.com/D_NQ_NP_661767-MLA49535290322_032022-O.webp", category:"celulares", price: "$" + 10000, marca: "Motorola", title: "Celular Motorola G22"},
    {id:5, image: "https://http2.mlstatic.com/D_NQ_NP_724772-MLA50878311168_072022-O.webp", category:"televisores", price: "$" + 10000, marca: "Noblex", title: "Televisor Noblex"},
    {id:6, image: "https://http2.mlstatic.com/D_NQ_NP_823011-MLA42939608633_072020-O.webp", category:"televisores", price: "$" + 10000, marca: "Telefunken",  title: "Televisor Telefunken"},
    {id:7, image: "https://http2.mlstatic.com/D_NQ_NP_805951-MLA50865156506_072022-O.webp", category:"notebooks", price: "$" + 10000, marca: "Dell",  title: "Notebook Dell"},
    {id:8, image: "https://http2.mlstatic.com/D_NQ_NP_945528-MLA49251126700_032022-O.webp", category:"notebooks", price: "$" + 10000, marca: "HP", title: "Notebook HP"},
    {id:9, image: "https://http2.mlstatic.com/D_NQ_NP_917545-MLA50401654103_062022-O.webp", category:"celulares", price: "$" + 10000, marca: "Samsung", title: "Celular Samsung A25"},
];


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))));
    },  [])


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;