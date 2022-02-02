import React from 'react';
import productosNovedades from '../Helpers/productosNovedades';
import ItemNovedades from './ItemNovedades';

const ItemListNovedades = ({ listNovedades }) => {

    return(

        <>
       {listNovedades.map(el => 
       <ItemNovedades key={el.id}
              id={el.id}
              name={el.name}
              category={el.category}
              description= {el.description}
              price={el.price}
              stock={el.stock}
              foto={el.foto}
              />)}
      </>
    )
    
};

export default ItemListNovedades;
