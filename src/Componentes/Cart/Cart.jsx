import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/esm/Alert';
import Modal from 'react-bootstrap/esm/Modal';
import styles from '../../CSS/cart.module.css';
import { Link } from 'react-router-dom';
//import { addDoc, getFirestore, collection, getDocs, documentId, query, where, writeBatch} from 'firebase/firestore'
import { useCartContext } from '../Context/CartContext';
import imgcarritovacio from '../../Imagenes/imgcarritovacio.jpeg';



const Cart = () => {

  const {cartList, emptyCart , deleteOne , totalSumary} = useCartContext()

  return <>
    {cartList.length !== 0 ? <div>
    {cartList.map(prod => <Modal.Dialog key={prod} className={styles.borderModule}>
    <Modal.Header>
      <Modal.Title>{prod.item.name}</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <div>
        <img className={styles.cardCart} src={prod.item.foto} alt='foto'></img>
      </div>
      
      <p>{prod.item.description}</p>
      <h5>Precio: USD {prod.item.price}</h5>
      <h6>Cantidad: {prod.cantidad}</h6>
      <h6>Stock: {prod.item.stock}</h6>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="dark" className={styles.deleteOne} onClick={() => deleteOne(prod)}>Eliminar del carrito</Button>
    </Modal.Footer>
  </Modal.Dialog>)}


  <div>
    <h3 className={styles.totalSumary}> {`El precio de su compra es de: USD ${totalSumary()}`} </h3>
    <div className={styles.containerButtonsCart}>
    <Button variant="dark" className={styles.emptyCart} onClick={emptyCart}>Vaciar Carrito</Button>
      <Link to="/form">
          <Button className={styles.goShopping}variant="primary">Realizar compra</Button>
      </Link>
    </div>
    
  </div>

    </div>

    :

    <div className={styles.divCart}>
      <img className={styles.imgCart} src={imgcarritovacio} alt='fotocarritovacio'></img>

      <Alert className={styles.alert}>
          No hay productos en el carrito <Link to='/'>
            <br></br>
          <Button className={styles.goToCart}>ir a comprar</Button> </Link>
      </Alert>
    </div>

    }
    

  </>

    
  
};

export default Cart;
