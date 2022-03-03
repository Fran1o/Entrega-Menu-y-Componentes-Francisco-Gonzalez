import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../CSS/gridProducts.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';



const ItemDetailContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState (true)
  const {idProduct} = useParams()

  useEffect(() => {

    const db = getFirestore();
    const itemReference = doc(db, 'productos', idProduct);

    getDoc(itemReference) 
    .then((res) => setProducts ({ id: res.id, ...res.data() }) )
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  
  },[idProduct])

  console.log(products)

  return (

    <>
    {loading ? <Spinner className={styles.loadingButton} animation="border" role="status">
  <span></span>
</Spinner> : <ItemDetail products={products} /> }

    </>
    
    )
};

export default ItemDetailContainer;
