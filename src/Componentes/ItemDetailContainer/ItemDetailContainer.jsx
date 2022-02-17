import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../../Helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState (true)
  const {idProducto} = useParams()

  useEffect(() => {

    getProducts().then((data) => {
      setProducts(data.find((el) => el.id === idProducto))
    })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [idProducto]);


  return (

    <>
    {loading ? <h1>Cargando...</h1> : <ItemDetail products={products}/>}
    </>
    
    )
};

export default ItemDetailContainer;
