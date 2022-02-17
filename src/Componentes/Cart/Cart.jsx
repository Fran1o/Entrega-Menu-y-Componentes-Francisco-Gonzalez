import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';
import { useCartContext } from '../Context/CartContext';



const Cart = () => {

  const {cartList, vaciarCarrito} = useCartContext()

  
  return (
    <>
    {cartList.map(prod => <Modal.Dialog key={prod.id}>
  <Modal.Header closeButton>
    <Modal.Title>{prod.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    {}
    <p>{}</p>
    <p>Precio: USD {prod.price}</p>
    <p>Cantidad: {prod.cantidad}</p>
    <p>{}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Eliminar del carrito</Button>
    <Button variant="primary">Finalizar Compra</Button>
  </Modal.Footer>
</Modal.Dialog> )}

  <div>
  <footer>
    <Button variant="dark" onClick={vaciarCarrito}>Vaciar Carrito</Button>
  </footer>
  </div>
    
 
  </>
  )
    
    
  
};

export default Cart;
