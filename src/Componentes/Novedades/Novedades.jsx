import React, { useEffect } from 'react';
import { useState } from 'react';
import getProductosNovedades from '../Helpers/getProductosNovedades';
import ItemListNovedades from './ItemListNovedades';
import styles from '../CSS/gridProducts.module.css';



const Novedades = ({ greeting }) => {
    const [listNovedades, setListNovedades] = useState([])
    
    useEffect(() => {
      getProductosNovedades()
      .then((data) => setListNovedades(data))
      .catch((err) => console.log(err))
      
    })

  return (
    <>
    <h1>NOVEDADES</h1>
    <div className={styles.gridProducts}>
    <ItemListNovedades listNovedades={listNovedades} />
    </div>
     
    </> 
    )
};

export default Novedades;
