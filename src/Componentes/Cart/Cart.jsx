import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';
import { useCartContext } from '../Context/CartContext';



const Cart = () => {

  const {cartList, vaciarCarrito, eliminarUno} = useCartContext()

  console.log(cartList, 'que me trae el cartlist?')

  return (
    <>
    
    {cartList.map(prod => <Modal.Dialog key={prod}>
    <Modal.Header>
      <Modal.Title>{prod.item.products.name}</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      {}
      <p>{prod.item.products.description}</p>
      <h5>Precio: {prod.item.products.price}</h5>
      <h6>Cantidad: {prod.cantidad}</h6>
      <h6>Stock: {prod.item.products.stock}</h6>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary" onClick={() => eliminarUno(prod)}>Eliminar del carrito</Button>
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
