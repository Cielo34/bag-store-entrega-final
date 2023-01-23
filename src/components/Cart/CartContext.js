import {createContext, useState} from 'react';



export const CartContext = createContext({})



export const {Provider} = CartContext


/* const ejCarrito = [
    {
        item: {
            nombre: 'ropa',
            precio: '1000'
        },
        quantity: 5
    },
    {
        item: {
            nombre: 'ropa',
            precio: '1000'
        },
        quantity: 5
    },
    {
        item: {
            nombre: 'ropa',
            precio: '1000'
        },
        quantity: 5
    }
]
 */





//aca adentro va a tener las funciones del carrito (add, remove, clear, isinCart(si ya existe el producto, no duplicar))
export const CartProvider = ({ defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue);


    //funcion para vaciar carrito, sobreimprime con el array vacio a traves del state
    const clearCart = () => {
        setCart([])
    }

    const addToCart =(item, quantity)=>{
        setCart(
            [
                ...cart,
                {
                    item:item,
                    quantity: quantity
                }
            ]
        )

    }




    //en este objeto van a ir todas las funciones del contexto que viajan por props del Provider
    const context = {
        clearCart,
        addToCart,
    }

    return(
        <Provider value={context}>
            {children}
        </Provider>
    )

}