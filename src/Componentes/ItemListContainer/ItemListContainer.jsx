import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../Helpers/getProducts'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([]);
    const { idCategoria } = useParams()

    console.log(idCategoria);

        useEffect(() => {
            getProducts()
            .then((data) => setListProducts(data))
            .catch((err) => console.log(err))
            
        }, [])    

  return (
      <>
      <ItemList listProducts={listProducts} />
      </>
  )


};

export default ItemListContainer;