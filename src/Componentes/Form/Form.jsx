import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/esm/Form'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import {addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch} from 'firebase/firestore'
import Accordion from 'react-bootstrap/Accordion'
import styles from '../../CSS/form.module.css';

const Formulario = () => {

  const { cartList, sumaTotal, vaciarCarrito } = useCartContext()

  //INFORMACION DE MI USUARIO






  //FUNCIONES  PARA EL BOTON DE FINALIZAR O CONFIRMAR COMPRA

  console.log(cartList,'que me trae cartlist al form?')

  const finalizarCompra = async (e) => {
    e.preventDefault()

    let orden = {}

    orden.buyer = {name:'Francisco', email:'panknha994@gmail.com', phone:'123456789'}
    orden.total = sumaTotal()


    orden.items = cartList.map(cartItem => {
      const id = cartItem.item.id
      const name = cartItem.item.name 
      const price = cartItem.item.price 
      const quantity = cartItem.cantidad

      return {
        id,
        name,
        price,
        quantity
      }

    })

    console.log(orden)

  const db = getFirestore()
  const ordersCollection = collection(db,'orders')

  await addDoc(ordersCollection, orden)
  .then(resp => console.log(resp))

  const queryCollection = collection(db, 'productos' )
  
  const queryUpdateStock = query(queryCollection, where(documentId(), 'in', cartList.map(it => it.item.id))
  )

  const batch = writeBatch(db)

  await getDocs(queryUpdateStock).then(resp => resp.docs.forEach(res => batch.update(res.ref, { 
    stock: res.data().stock - cartList.find(item => item.item.id === res.id).cantidad
    })
  ))

  .catch(err => console.log(err))
  .finally(() => alert('Su compra ha sido realizada con exito, revise su correo para coordinar entrega o retiro de su compra.'),
    console.log('stock actualizado'))
  
    batch.commit()

  }



  return <>

<Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Ver resumen del pedido</Accordion.Header>
    <Accordion.Body>
      {cartList.map(prod => <div>
        
        <h2> {prod.item.name} </h2>
        <h3> USD {prod.item.price} </h3>

      </div> )}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Total al pagar</Accordion.Header>
    <Accordion.Body>
      <h3>USD {sumaTotal()}</h3>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

  {<div>
    
    <Form className={styles.divForm}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><h4>Nombre completo</h4></Form.Label>
      <Form.Control type="text" placeholder="Nombre Completo"  />
      <Form.Text className="text-muted">
        Que aparece en su tarjeta de credito
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label><h4>Numero de tarjeta</h4></Form.Label>
      <Form.Control placeholder="Numero de tarjeta"  />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label>CVC</Form.Label>
    <Form.Control placeholder="***"  />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label><h4>Fecha de vencimiento</h4></Form.Label>
    <Form.Control type="date" placeholder="**/**"  />
    </Form.Group>

    <Button variant="primary" onClick={e => finalizarCompra(e)}>
      Confirmar Compra
    </Button>
    
    <Link to="/">
    <Button variant="dark" onClick={vaciarCarrito}>
      Cancelar Compra
    </Button>
    </Link>
    
  </Form>



  </div>
    
  }
  
  </>

}

export default Formulario;
