import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ products }) => {

  return (

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={products.foto} />
        <Card.Body>
      <Card.Title>{products.name}</Card.Title>
        <Card.Text>
          <h4>{products.price}</h4>
          <h5>{products.description}</h5>
          <p>{products.descriptiondos}</p>
          <p>Stock: {products.stock}</p>

        </Card.Text>
        
        <ItemCount initial={1} stock={products.stock}/>
  
      </Card.Body>
      </Card>
  );

}

export default ItemDetail;

