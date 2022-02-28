import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/esm/Form'
import { useState } from 'react'
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

    orden.buyer = dataForm
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
  .finally(() => setDataForm({
                  name:'',
                  email:'',
                  emailrep:'',
                  numbertarjet:'',
                  numcvc:'',
                  date:'',
                  phone:'',
  
    }), alert('Su compra ha sido realizada con exito, revise su correo para retirar su compra o coordinar envio.'),
    vaciarCarrito()
  )
  
    batch.commit()

  }

  const [dataForm, setDataForm] = useState({
    name:'',
    email:'',
    emailrep:'',
    numbertarjet:'',
    numcvc:'',
    date:'',
    phone:'',

  })

  

  console.log(dataForm)

  const handleChange = (event) => {
  
    setDataForm({
      ...dataForm,
      [event.target.name] : event.target.value
    })
  }



  return <>

<Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header >Ver resumen del pedido</Accordion.Header>
    <Accordion.Body>
      {cartList.map(prod => <div>
        
        <h4> { prod.item.name } </h4>
        <h5> USD { prod.item.price }</h5>

      </div> )}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header> El id de su compra es: </Accordion.Header>
    <Accordion.Body>
    {cartList.map(prod => <div>
        
        <h6> { prod.item.id } </h6>

      </div> )}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

  {<div>
    
    <Form className={styles.divForm}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><h4>Nombre completo</h4></Form.Label>
      <Form.Control type="text" placeholder="Nombre Completo" name='name' value={dataForm.name} onChange={handleChange} />
      <Form.Text className="text-muted">
        Que aparece en su tarjeta de credito
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label><h4>Email</h4></Form.Label>
    <Form.Control type="email" placeholder="email"  name='email' value={dataForm.email} onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Control type="email" placeholder="Repita su email"  name='emailrep' value={dataForm.emailrep} onChange={handleChange}/>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label><h4>Numero de tarjeta</h4></Form.Label>
      <Form.Control type="number" placeholder="Numero de tarjeta" name='numbertarjet' value={dataForm.numbertarjet} onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label><h4>CVC</h4></Form.Label>
    <Form.Control type="number" placeholder="***"  name='numcvc' value={dataForm.numcvc} onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label><h4>Fecha de vencimiento</h4></Form.Label>
    <Form.Control type="date" placeholder="**/**"  name='date' value={dataForm.date} onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label><h4>Telefono / celular</h4></Form.Label>
    <Form.Control type="number" name='phone' value={dataForm.phone} onChange={handleChange}/>
    </Form.Group>

    <Link to="/cart">
    <Button variant="primary" onClick={e => finalizarCompra(e)}>
      Confirmar Compra
    </Button>
    </Link>
    
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
