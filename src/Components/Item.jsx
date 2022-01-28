import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

const Item = ({ id, category, name, description, stock, price, foto }) => {
  return (
      <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={foto}  />

        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <h3>
                {price}
            </h3>
            </Card.Text>
            <button className="btn btn-outline-primary btn-block">Detalle del Producto</button>
        </Card.Body>
        </Card>
      
      </>
  )
};

export default Item;
