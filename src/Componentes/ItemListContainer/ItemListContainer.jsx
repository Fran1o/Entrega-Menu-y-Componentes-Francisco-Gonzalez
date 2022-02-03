import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../Helpers/getProducts'
import ItemList from '../ItemList/ItemList';
import productos from '../Helpers/products';
import styles from '../CSS/gridProducts.module.css';


const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([]);
    const { idCategoria } = useParams()

    console.log(idCategoria);

        useEffect(() => {

            async function fetchData() {
                const response = await productos
                setListProducts ( idCategoria ? response.filter (listProducts => listProducts.category === idCategoria) : response );
            }
            fetchData();
            
        }, [idCategoria]);

  return (
      <>
      
      <div className={styles.gridProducts}>
       <ItemList listProducts={listProducts} />
      </div>
      
      </>
  )


};

export default ItemListContainer;