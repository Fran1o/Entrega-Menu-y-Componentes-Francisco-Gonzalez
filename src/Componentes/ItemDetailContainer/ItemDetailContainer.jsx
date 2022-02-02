import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../Helpers/getProducts';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([])
  const {idProducto} = useParams()

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.find((el) => el.id === idProducto))
      .catch(err => console.log(err))

    });

  },[]);


  return (
    <ItemDetail products={products} />
    )
};

export default ItemDetailContainer;
