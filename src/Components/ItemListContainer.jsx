import React from 'react'
import {useState} from "react"
import { getFetch } from '../Helpers/mock';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import ItemCount from './ItemCount';


function ItemListContainer (){

    const [productos, setProductos]=useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        getFetch
        .then(res => setProductos(res))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])
    

function onAdd (cant){
    console.log(cant)
}
return (
    <>
    <div>
        {loading ? <h2>Cargando...</h2>:

        productos.map(productos => <div key={productos.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productos.foto}  />
        
        <Card.Body>
            <Card.Title>{productos.name}</Card.Title>
            <Card.Text>
            <h3>
                {productos.price}
            </h3>
            </Card.Text>
            <button className="btn btn-outline-primary btn-block">Detalle del producto</button>
        </Card.Body>
        </Card>

    </div>

        )}

    </div>

    </>

);


}

export default ItemListContainer;




