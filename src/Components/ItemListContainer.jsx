import React from 'react'
import ItemCount from './ItemCount';

function ItemListContainer (){

    function onAdd (cant){
        console.log(cant)

    }
    
    return (
        <div>
            <button onClick={()=> setBool(!bool)}>CLICK</button>
            <br />
            <ItemCount stock={7} initial={1} onAdd={} />
        </div>

    );
}

export default ItemListContainer;


