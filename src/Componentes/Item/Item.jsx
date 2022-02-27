import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import styles from '../../CSS/gridProducts.module.css'


const Item = ({ id, category, name, description, price, stock, foto }) => {


  return <>
      <Card className={styles.cardProducts}>
        <Card.Img variant="top" src={foto} />
          <Card.Body>
            <Card.Title> {name} </Card.Title>
              <Card.Text>
                <h4> USD {price}</h4>
              </Card.Text>
            <Link to={`/detalle/${id}`}>
              <Button variant="primary">Detalle del producto</Button>
            </Link>
          </Card.Body>
      </Card>
  

  </>
};

export default Item;




