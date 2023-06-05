import { createContext, useState } from "react";

export const  CartContext  = createContext();

export const CartProvider = ({children}) => {

    const [cart,setCart] = useState();

    function handleMyCart(item) {
        setCart((cart) => [...cart, item]);
      }

    return (
        <CartContext.Provider  value={{
            cart,
            handleMyCart
          }}>
            {children}
        </CartContext.Provider>
    )
}