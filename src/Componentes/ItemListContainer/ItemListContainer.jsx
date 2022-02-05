import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../Helpers/products';
import getProducts from '../../Helpers/getProducts'
import ItemList from '../ItemList/ItemList';
import styles from '../../CSS/gridProducts.module.css';


const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()

    console.log(idCategoria);

        useEffect(() => {
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