import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import styles from '../../CSS/imgCardDetail.module.css'
import Button from 'react-bootstrap/esm/Button';

const ItemDetail = ({ products}) => {

    const [button, setButton] = useState ('addToCart')
    
    const onAdd = () => {
        setButton('goToCart')
    }
  
  return(
    <>

        <Card className={styles.CardDetail}>
        <Card.Img variant="top" src={products.foto} />
        {<br></br>}
        <Card.Body>
      <Card.Title>{products.name}</Card.Title>
        <Card.Text>
          <h4>{products.price}</h4>
          <h5>{products.description}</h5>
          <h5>{products.descriptiondos}</h5>
          <h5>Stock: {products.stock}</h5>

        </Card.Text>
        {
          button === 'addToCart' ? <ItemCount initial={1} stock={products.stock} onAdd={onAdd} />
          :
          <div>
            <br></br>
            <Link to="/carrito">
            <Button variant="primary" onClick={() => console.log('ir al cart')}>Terminar Compra</Button>
            </Link>
            <br></br>
            <Link to="/">
            <Button variant="success" onClick={() => console.log('vuelve al home')}>Seguir agregando productos al carrito</Button>
            <br></br>
            <Button variant="dark" onClick={() => console.log('cancela la compra, vuelve al home')}>Cancelar</Button>
            </Link>
          </div>
        }
        
      </Card.Body>
      </Card>
    
    </>
  )
}

export default ItemDetail;
