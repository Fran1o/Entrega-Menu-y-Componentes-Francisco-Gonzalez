import React from 'react';
import productos from '../Helpers/products';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Item = ({ id, category, name, description, price, stock, foto}) => {
  return (
      <>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={foto} />
        <Card.Body>
      <Card.Title>{name}</Card.Title>
        <Card.Text>
          <h4>{price}</h4>
        </Card.Text>
        <Link to={`/detalle/${id}`}>
        <Button variant="primary">Detalle del producto</Button>
        </Link>
      </Card.Body>
      </Card>
      </>
  
    )
};

export default Item;




