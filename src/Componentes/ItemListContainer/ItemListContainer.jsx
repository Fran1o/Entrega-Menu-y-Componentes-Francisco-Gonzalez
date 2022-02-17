import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../Helpers/products';
import getProducts from '../../Helpers/getProducts'
import ItemList from '../ItemList/ItemList';
import styles from '../../CSS/gridProducts.module.css';
import getFirestoreApp from '../../Firebase/config';
import {collection, getDocs} from 'firebase/firestore'



const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()

    console.log(idCategoria);

        useEffect(() => {

            const db = getFirestoreApp()
            
            console.log('error en la linea de abajo')

            //const queryCollection = collection(db,'productos');

            console.log('aca esta el error')

            //getDocs(queryCollection)
            //.then(resp => setListProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}) ) ))
            //.catch((err) => console.log(err))
            


            getProducts()
            .then((response) =>
                setListProducts(
                    idCategoria === "novedades"
                        ? response.filter((el) => el.novedad)
                        : idCategoria
                        ? response.filter(
                            (listProducts) => listProducts.category === idCategoria) : response

                        )
                    )
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }, [idCategoria])

        console.log(productos)

  return (
      <>
      
      {loading ? <h1>Cargando...</h1> : 
            <div className={styles.gridProducts}>
                <ItemList listProducts={listProducts} />
            </div> }
      
      
      </>
  )


};

export default ItemListContainer;