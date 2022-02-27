import { useState } from "react";
import Button from "react-bootstrap/esm/Button";



function ItemCount ({initial, stock, onAdd}) {

    const [contador, setContador] = useState(initial);
    console.log(contador)
    
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

    if(stock === 0){
        
        return <Button variant="danger" size="lg" disabled> No hay stock disponible </Button>

    }else{

        return (
            <div className="container w-50">
                <h3>{contador}</h3>
                <br></br>
                <button className="btn btn-outline-primary" onClick={handlerAumentar}>+</button>
                <button className="btn btn-outline-primary" onClick={handlerRestar}>-</button>
                <button className="btn btn-outline-primary" onClick={() => onAdd(contador)}>Agregar al Carrito</button>
            </div>
        )

    }
    

}

export default ItemCount;