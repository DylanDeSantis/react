import { createContext, useState } from "react";

export const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [idOrden, setIdOrden] = useState("");
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        count,
        setCount,
        cartItems,
        setCartItems,
        idOrden,
        setIdOrden,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
