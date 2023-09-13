import ItemCount from "../ItemCount/ItemCount";
import { getProducts } from '../../asyncMock'
import ItemList from "../ItemList/ItemList";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const films =[
    { id:1, image: "https://mac-center.com/cdn/shop/products/IMG-6206251_823x.jpg?v=1661520210", category:'Iphone', title: "Iphone"},
    { id:2, image: "https://images.samsung.com/is/image/samsung/p6pim/co/feature/164091379/co-feature-minimalist-design-with-striking-style-532569297?$FB_TYPE_B_JPG$",category:'Samsung', title: "Samsung"},
    { id:3, image: "https://i.blogs.es/379ae8/nokiac21plus/450_1000.webp",category:'Nokia', title: "Nokia"},
];

export const ItemListContainer =({greeting}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() =>{
            resolve(films);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(film => film.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
    }, [categoriaId])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount initial={0} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </div>
    );
}

export default ItemListContainer;