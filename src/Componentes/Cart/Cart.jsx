import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';
import { useCartContext } from '../Context/CartContext';



const Cart = () => {

  const {cartList, vaciarCarrito , eliminarUno , sumaTotal} = useCartContext()

  console.log(cartList, 'que me trae el cartlist?')

  return (
    <>
    
    {cartList.map(prod => <Modal.Dialog key={prod}>
    <Modal.Header>
      <Modal.Title>{prod.item.name}</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      {}
      <p>{prod.item.description}</p>
      <h5>Precio: USD {prod.item.price}</h5>
      <h6>Cantidad: {prod.cantidad}</h6>
      <h6>Stock: {prod.item.stock}</h6>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="dark" onClick={() => eliminarUno(prod)}>Eliminar del carrito</Button>
    </Modal.Footer>
  </Modal.Dialog>)}

  
  <div>
    {`El precio de su compra es de: USD ${sumaTotal()}`}
  </div>

  <footer>

    <Button variant="dark" onClick={vaciarCarrito}>Vaciar Carrito</Button>
    <Button variant="primary">Finalizar Compra</Button>

  </footer>
  </>
  
  )
  
    
    
  
};

export default Cart;
