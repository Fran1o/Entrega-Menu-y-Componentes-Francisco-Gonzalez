import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ItemCount from '../ItemCount/ItemCount';
import styles from '../../CSS/imgCardDetail.module.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useCartContext } from '../Context/CartContext';

const ItemDetail = ({ products }) => {

    const [button, setButton] = useState ('addToCart')
    const {cartList, AddToCart} = useCartContext()

    function onAdd(contador){
      //console.log(contador, 'primer contador ')
      AddToCart ({item: products, cantidad: contador})
      setButton('goToCart')
      
    }
    console.log(cartList,'que me trae cartlist a itemdetail')
      
  return(
    <>
    <Card className={styles.cardDetail} >
      <Card.Img className={styles.cardDetailImg} variant="top" src={products.foto} />
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
      
          <ListGroup className="list-group-flush">
            <ListGroupItem>{products.description}</ListGroupItem>
            <ListGroupItem>Precio: USD {products.price}</ListGroupItem>
            <ListGroupItem>Stock: {products.stock}</ListGroupItem>
          </ListGroup>
          </Card.Body>
      <Card.Body>
        
        {
          button === 'addToCart' ? <ItemCount initial={1} stock={products.stock} onAdd={onAdd} />
          :
          <div>
            <br></br>
            <Link to="/cart">
            <Button variant="primary" onClick={() => console.log('ir al cart')}>Ir al carrito</Button>
            </Link>
            <br></br>
            <Link to="/">
            <Button variant="success" onClick={() => console.log('vuelve al home')}>Seguir agregando productos al carrito</Button>
            </Link>
          </div>
        }
        
      </Card.Body>
      </Card>
    </>
  )
}

export default ItemDetail;
/*<Card className={styles.CardDetail}>
        <Card.Img variant="top" src={products.foto} />
        {<br></br>}
        <Card.Body>
      <Card.Title><h4>{products.name}</h4></Card.Title>
        <Card.Text>
          <h5> USD {products.price}</h5>
          <h6>{products.description}</h6>
          <h6>{products.descriptiondos}</h6>
          <h5>Stock: {products.stock}</h5>

        </Card.Text>*/