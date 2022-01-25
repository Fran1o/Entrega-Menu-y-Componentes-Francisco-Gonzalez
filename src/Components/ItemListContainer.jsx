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
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{productos.name}</Card.Title>
                <Card.Text>
                {productos.description}
                <h3>
                    {productos.price}
                </h3>
                </Card.Text>

                <ItemCount initial={1} stock={4} onAdd={onAdd}/>
            </Card.Body>
            </Card>

        </div>
        
            )}

        </div>
        
        </>

    );


}

export default ItemListContainer;




