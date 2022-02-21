import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}


function CartContextProvider ( {children} ) {
    
    const [cartList, setCartList] = useState([]);


    function agregarAlCarrito(products, contador){ //me trae la primer cantidad del contador

        if (evitarDuplicados(products)) {
            console.log('existe, cambio la cantidad')
            console.log(contador, 'que me trae el contador')

            const cambiarCantidad = [...cartList]

            cambiarCantidad.forEach(x => {

                if (x.item = products){
                    x.cantidad += contador
                    
                }

                return setCartList(cambiarCantidad)
            })

            
        }
        else{
            return setCartList([ ...cartList, {item: products, cantidad: contador}])
        }

    }
    console.log(cartList)

    const evitarDuplicados = (parametro) => {

        const findcartList = cartList.find(el => el.item.products.id === parametro.products.id)
        return findcartList;
    }

    

    function vaciarCarrito(){
        setCartList([])
    }
    

    return <cartContext.Provider value={{cartList, agregarAlCarrito, vaciarCarrito}}>
                {children}
            </cartContext.Provider>

}

export default CartContextProvider;

