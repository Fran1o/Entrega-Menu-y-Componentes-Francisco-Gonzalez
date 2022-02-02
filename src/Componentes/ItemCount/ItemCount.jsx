import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCount ({initial, stock, onAdd}) 
{
    const [contador, setContador] = useState(initial);
    
    const handlerAumentar =()=> {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const handlerRestar =() => {
        if(contador > initial){
            setContador(contador -1)
        }
    }

    const agregar =() => {
        onAdd(contador)
    }

    return (
        <div className="container w-50">
            {contador}
            <br></br>
            <button className="btn btn-outline-primary" onClick={handlerAumentar}>+</button>
            <button className="btn btn-outline-primary" onClick={handlerRestar}>-</button>
            <Link to='/carrito'>
            <button className="btn btn-outline-primary" onClick={agregar}>Agregar al carrito</button>
            </Link>
            
        </div>
    )

}

export default ItemCount;