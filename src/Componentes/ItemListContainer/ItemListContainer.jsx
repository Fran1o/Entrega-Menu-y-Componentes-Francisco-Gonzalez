import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import styles from '../../CSS/gridProducts.module.css';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner';



const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()


        useEffect(() => {
        
            if(idCategory){

            const db = getFirestore();
            const queryFiltro = query(collection(db, 'productos'), where ('category', '==', idCategory))

            getDocs(queryFiltro)
            .then((resp) => 
                setListProducts(
                    resp.docs.map((prod) => ({id: prod.id, ...prod.data () } ))
                )
            )
            .catch((err) => console.log(err))
            .finally(() => setLoading (false))


            }else{
            
            const db = getFirestore();
            const queryColecction = collection(db, 'productos')

            getDocs(queryColecction)
            .then((resp) => 
                setListProducts(
                    resp.docs.map((prod) => ({id: prod.id, ...prod.data () } ))
                )
            )
            .catch((err) => console.log(err))
            .finally(() => setLoading (false))
            }
        })


  return (
      <>
      
      {loading ? <Spinner className={styles.loadingButton} animation="border" role="status">
  <span></span>
</Spinner> : 
            <div className={styles.gridProducts}>
                <ItemList listProducts={listProducts} />
            </div> }
      
      
      </>
  )

}

export default ItemListContainer;

/*
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
                .finally(() => setLoading(false));*/
