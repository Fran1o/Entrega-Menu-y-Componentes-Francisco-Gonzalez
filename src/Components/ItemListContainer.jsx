import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from '../Components/ItemList'
import getProducts from '../Helpers/getProducts';

const ItemListContainer = ({ greeting }) =>{

    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getProducts()
        .then((data) => setListProducts(data))
        .catch((err) => console.log(err));

    }, [])


    return(
        <>
        <ItemList listProducts={listProducts} />
        </>
    );
};

export default ItemListContainer;

    
    

