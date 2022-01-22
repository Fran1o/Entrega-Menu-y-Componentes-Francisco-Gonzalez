import { useState } from "react";
import ItemListContainer from "./ItemListContainer";


function ItemCount ({initial, stock, onAdd}){
    const [contador, setcontador]=useState(initial);

    const handlerAumentar=()=>{
        if(contador < stock){
            setcontador(contador+1)
        }
    }
    
    const handlerRestar=()=>{
        if(contador > initial){
            setcontador(contador-1)
        }
    }

    const agregar =()=>{
        onAdd(contador)
    }

    return(
        <div className="container w-50">
            <button className="btn btn-outline-primary" onClick={handlerAumentar}>+</button>
            {contador}
            <button className="btn btn-outline-primary" onClick={handlerRestar}>-</button>
            <br/>
            <button className="btn btn-outline-primary" onClick={agregar}>Comprar</button>
    
        </div>
    )
}

export default ItemCount;
