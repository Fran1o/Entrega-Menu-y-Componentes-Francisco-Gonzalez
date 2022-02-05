import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ listProducts }) => {
  return (
      <>
       {listProducts.map(el => 
       <Item key={el.id}
              id={el.id}
              name={el.name}
              category={el.category}
              description= {el.description}
              price={el.price}
              stock={el.stock}
              foto={el.foto}
              novedad={el.novedad}
              />)}
      </>
    )
};

export default ItemList;
