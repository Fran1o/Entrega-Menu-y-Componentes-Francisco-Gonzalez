import React from 'react';
import Item from '../Components/Item'

const ItemList = ({listProducts}) => {
  return (
      <>
      {
          listProducts.map((el) => {
              <Item key={el.id}
                    id={el.id}
                    category={el.category}
                    name={el.name}
                    description={el.description}
                    stock={el.stock}
                    price={el.price}
                    foto={el.foto}
              />
          })}
      </>
    );
};

export default ItemList;
