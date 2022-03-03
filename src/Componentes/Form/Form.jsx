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

  const { cartList, totalSumary, emptyCart } = useCartContext()
  const [idOrder, setIdOrder] = useState('')

  //INFORMACION DE MI USUARIO
  






  //FUNCIONES  PARA EL BOTON DE FINALIZAR O CONFIRMAR COMPRA

  console.log(cartList,'que me trae cartlist al form?')

  const checkout = async (e) => {
    e.preventDefault()

    let orden = {}

    orden.buyer = dataForm
    orden.total = totalSumary()


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
  .then(resp => setIdOrder(resp.id))

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
    emptyCart()
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

  <Accordion.Header>Click para ver resumen del pedido</Accordion.Header>
  <Accordion.Body>
    {cartList.map(prod => <div key={prod.item.id}>
      
      <h4>- { prod.item.name } </h4>
      <p> USD {prod.item.price}</p>
    </div> )}
    

  </Accordion.Body>
</Accordion.Item>
</Accordion>

{idOrder && <Accordion defaultActiveKey={['0']} alwaysOpen>
<Accordion.Item eventKey="0">

  <Accordion.Header >Click para ver el id de su compra</Accordion.Header>
  <Accordion.Body className={styles.accordionBody}>
    <p>- {idOrder}</p>
  </Accordion.Body>
</Accordion.Item>
</Accordion>

}
          

  {<div>
    
    <Form className={styles.divForm}>
      <div>
        <h4 className={styles.titleForm}>PAGO CON TARJETA</h4>
      </div>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><h6>Nombre completo</h6></Form.Label>
      <Form.Control type="text" placeholder="Nombre Completo" name='name' value={dataForm.name} onChange={handleChange} />
      <Form.Text className="text-muted">
        Que aparece en su tarjeta de credito
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label><h6>Email</h6></Form.Label>
    <Form.Control type="email" placeholder="Email"  name='email' value={dataForm.email} onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Control type="email" placeholder="Repita su email"  name='emailrep' value={dataForm.emailrep} onChange={handleChange}/>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label><h6>Numero de tarjeta</h6></Form.Label>
      <Form.Control type="number" placeholder="Numero de tarjeta" name='numbertarjet' value={dataForm.numbertarjet} onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label><h6>CVC</h6></Form.Label>
    <Form.Control type="number" placeholder="***"  name='numcvc' value={dataForm.numcvc} onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label><h6>Fecha de vencimiento</h6></Form.Label>
    <Form.Control type="date" placeholder="**/**"  name='date' value={dataForm.date} onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label><h6>Telefono / celular</h6></Form.Label>
    <Form.Control type="number" name='phone' value={dataForm.phone} onChange={handleChange}/>
    </Form.Group>
    <div className={styles.containerButtonsForm}>

    <Link to="/">
    <Button className={styles.cancelButton} variant="dark" onClick={emptyCart}>
      Cancelar Compra
    </Button>
    </Link>
    
    
    <Button className={styles.checkoutButton} variant="primary" onClick={e => checkout(e)}>
      Confirmar Compra
    </Button>

    </div>
    
    
  </Form>



  </div>
    
  }
  
  </>

}

export default Formulario;
