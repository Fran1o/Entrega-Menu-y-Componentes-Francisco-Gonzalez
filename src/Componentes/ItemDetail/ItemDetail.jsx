import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ItemCount from '../ItemCount/ItemCount';
import styles from '../../CSS/CardDetail.module.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useCartContext } from '../Context/CartContext';

const ItemDetail = ({ products }) => {

    const [button, setButton] = useState ('addToCart')
    const { AddToCart} = useCartContext()

    function onAdd(contador){
      //console.log(contador, 'primer contador ')
      AddToCart ({item: products, cantidad: contador})
      setButton('goToCart')
      
    }
      
  return(
    <>
    <div className={styles.containerCardDetail}>
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
          <div className={styles.buttonsAfterCount}>
            <br></br>
            <Link to="/cart">
            <Button variant="primary" onClick={() => console.log('cart')}>Ir al carrito</Button>
            </Link>
            <br></br>
            <Link to="/">
            <Button variant="success" onClick={() => console.log('home')}>Seguir agregando productos al carrito</Button>
            </Link>
          </div>
        }
        
      </Card.Body>
      </Card>

      
    </div>

    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Garantía</Card.Title>
            <Card.Text>
              Todos los productos de nuestro sitio cuenta con la garantia de su fabricante.
              Consulte por correo electrónico cómo esta protegida su compra.
            </Card.Text>
        </Card.Body>

        <Card.Footer>
          <small className="text-muted">contacto: drumoffice94@gmail.com</small>
        </Card.Footer>
    </Card>

    <Card>
        <Card.Body>
          <Card.Title>Formas de pago</Card.Title>
          <Card.Text>
              Puede pagar online de forma segura con tarjetas de credito de todos los bancos
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <small className="text-muted">contacto: drumoffice94@gmail.com</small>
        </Card.Footer>
    </Card>

    <Card>
        <Card.Body>
           <Card.Title>Medios de envío</Card.Title>
            <Card.Text>
              Hacemos envios a todo el país, gratis con la compra mayor a USD 500.
              Tambien puede retirar en nuestro local, previa coordinacion por mail.
            </Card.Text>
        </Card.Body>

    <Card.Footer>
      <small className="text-muted">contacto: drumoffice94@gmail.com</small>
    </Card.Footer>
  </Card>
</CardGroup>
    
    </>
  )
}

export default ItemDetail;
