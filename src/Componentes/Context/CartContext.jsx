import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}


function CartContextProvider ( {children} ) {
    
    const [cartList, setCartList] = useState([]);


    function AddToCart(item){ //me trae la primer cantidad del contador
        const index = cartList.findIndex(prod => prod.item.id === item.item.id )

        console.log(item,'que me trae item')
        console.log(cartList, 'que me trae cartlist al context')

        if (index === -1) {

            setCartList( [...cartList, item] )
  
        }else{

            console.log('existe, cambio la cantidad')

            const cant = cartList[index].cantidad
            cartList[index].cantidad = item.cantidad + cant

            const newCartList = [ ...cartList ]
            setCartList(newCartList)

        }
    }
    console.log(cartList)

    const sumaTotal = () => {
        return cartList.reduce((acum, prod) => acum = acum + (prod.item.price * prod.cantidad), 0)
        
    }

    const cantidadCarrito = () => {
        return cartList.reduce((acum, prod) => acum += prod.cantidad, 0)
    }

    const eliminarUno = (prod) => {
        
        const eliminarItem = [... cartList]
        const itemEliminado = eliminarItem.filter(x => x !== prod)

        console.log('se ejecuta')

        return setCartList(itemEliminado)
    }
    
    function vaciarCarrito(){
        setCartList([])
    }
    

    return <cartContext.Provider value={{cartList, AddToCart, vaciarCarrito, eliminarUno, sumaTotal, cantidadCarrito}}>
                {children}
            </cartContext.Provider>

}

export default CartContextProvider;
