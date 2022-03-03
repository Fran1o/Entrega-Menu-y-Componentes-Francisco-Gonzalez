import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}


function CartContextProvider ( {children} ) {
    
    const [cartList, setCartList] = useState([]);


    function AddToCart(item){ //me trae la primer cantidad del contador
        const index = cartList.findIndex(prod => prod.item.id === item.item.id )

        console.log(item)

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

    const totalSumary = () => {
        return cartList.reduce((acum, prod) => acum = acum + (prod.item.price * prod.cantidad), 0)
        
    }

    const cartQuantity = () => {
        return cartList.reduce((acum, prod) => acum += prod.cantidad, 0)
    }

    const deleteOne = (prod) => {
        
        const deleteItem = [... cartList]
        const itemDelete = deleteItem.filter(x => x !== prod)

        console.log('se ejecuta')

        return setCartList(itemDelete)
    }
    
    function emptyCart(){
        setCartList([])
    }
    

    return <cartContext.Provider value={{cartList, AddToCart, emptyCart, deleteOne, totalSumary, cartQuantity}}>
                {children}
            </cartContext.Provider>

}

export default CartContextProvider;
