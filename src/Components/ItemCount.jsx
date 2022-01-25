import React from "react";
import {useState} from "react";

function ItemCount ({initial, stock, onAdd}) {

    const [contador, setcontador] = useState(initial);

    const handlerAumentar=() =>{
        if (contador < stock){
            setcontador (contador + 1)
        }
    }

    const handlerRestar =() =>{
        if (contador > initial){
            setcontador (contador - 1)
        }
    }

    const agregarAlCarrito =()=>{
        onAdd(contador)
    }
    

    return (
        
        <div>
        {contador}
        <br />
        <button className="btn btn-outline-primary" onClick={handlerAumentar}> + </button>
        <button className="btn btn-outline-primary" onClick={handlerRestar}> - </button>
        <br />
        <button className="btn btn-outline-primary btn-block" onClick={agregarAlCarrito}> Agregar al carrito </button>
        </div>
        
    )      

}

export default ItemCount;