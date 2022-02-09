import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import styles from '../../CSS/imgCardDetail.module.css'
import Button from 'react-bootstrap/esm/Button';
import { useCartContext } from '../Context/CartContext';

const ItemDetail = ({ products}) => {

    const [button, setButton] = useState ('addToCart')
    
    const {cartList, agregarAlCarrito} = useCartContext()


    function onAdd(cant){
      agregarAlCarrito({...products, cantidad: cant})
      setButton('goToCart')
    }
    console.log(cartList)
      
  return(
    <>

        <Card className={styles.CardDetail}>
        <Card.Img variant="top" src={products.foto} />
        {<br></br>}
        <Card.Body>
      <Card.Title><h4>{products.name}</h4></Card.Title>
        <Card.Text>
          <h5>{products.price}</h5>
          <h6>{products.description}</h6>
          <h6>{products.descriptiondos}</h6>
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
