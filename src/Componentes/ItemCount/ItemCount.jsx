import { useState } from "react";
import styles from '../../CSS/count.module.css';



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

        return (
            <div className={styles.containerCount}>
                
                <div className={styles.inputCount}>
                    <button className="btn btn-outline-primary" onClick={handlerRestar}>-</button>
                    <div className={styles.divContador}>{contador}</div>
                    <button className="btn btn-outline-primary" onClick={handlerAumentar}>+</button> 
                </div>
                <div className={styles.buttonAdd}>
                <button className={"btn btn-outline-primary"} onClick={() => onAdd(contador)}>Agregar al Carrito</button>        
                </div>
                
            </div>
        )

}

export default ItemCount;