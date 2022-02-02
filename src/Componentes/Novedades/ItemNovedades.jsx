import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import productosNovedades from '../Helpers/productosNovedades';
import styles from '../CSS/gridProducts.module.css';


const ItemNovedades = ({id, category, name, description, price, stock, foto, descriptiondos}) => {
  

  return (

    <>
        <Card className={styles.gridProducts} >
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


export default ItemNovedades;
