import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';
import { useCartContext } from '../Context/CartContext';



const Cart = () => {

  const {cartList, vaciarCarrito} = useCartContext()

  console.log(cartList, 'que me trae el cartlist?')

  return (
    <>
    
    {cartList.map(prod => <Modal.Dialog key={prod}>
    <Modal.Header>
      <Modal.Title>{prod.item.name}</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      {}
      <p>{}</p>
      <h5>Precio: {prod.item.price}</h5>
      <h6>Cantidad: {prod.cantidad}</h6>
      <h6>Stock: {prod.item.stock}</h6>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary">Eliminar del carrito</Button>
      <Button variant="primary">Finalizar Compra</Button>
    </Modal.Footer>
  </Modal.Dialog>)}

  <div>
  <footer>
    <Button variant="dark" onClick={vaciarCarrito}>Vaciar Carrito</Button>
  </footer>
  </div>
    
 
  </>
  )
    
    
  
};

export default Cart;
