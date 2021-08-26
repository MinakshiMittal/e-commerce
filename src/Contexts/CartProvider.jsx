import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reducers";

const CartContext = createContext();

const cartInitialState = {
  loading: true,
  error: "",
  itemsInCart: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
