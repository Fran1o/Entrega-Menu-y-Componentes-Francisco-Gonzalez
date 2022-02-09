import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}


function CartContextProvider ( {children} ) {
    
    const [cartList, setCartList] = useState([]);

    function agregarAlCarrito(item){
        setCartList([ ...cartList, item])
    }



    return <cartContext.Provider value={{cartList, agregarAlCarrito}}>
                {children}
            </cartContext.Provider>

}

export default CartContextProvider;

