import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import getProducts from '../../Helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';



const ItemDetailContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState (true)
  const {idProducto} = useParams()

  useEffect(() => {

    const db = getFirestore();
    const itemReference = doc(db, 'productos', idProducto);

    getDoc(itemReference) 
    .then((res) => setProducts ({ id: res.id, ...res.data() }) )
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
    

    //getProducts().then((data) => {
      //setProducts(data.find((el) => el.id === idProducto))
    //})
      //.catch(err => console.log(err))
      //.finally(() => setLoading(false));
  },[idProducto])
  //, [idProducto]);
  console.log(products)

  return (

    <>
    {loading ? <h1>Cargando...</h1> : <div> <ItemDetail products={products} /> </div> }
    </>
    
    )
};

export default ItemDetailContainer;
