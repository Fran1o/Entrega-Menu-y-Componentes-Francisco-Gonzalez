import React from 'react'

export const ItemListContainer = ( props ) => {
console.log(props)
    return (
        <div>
            <h1>ITEMLIST</h1>
            { props.greetings }
        </div>

    );
}