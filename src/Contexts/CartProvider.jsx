import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../Reducers";

const CartContext = createContext();

const cartInitialState = {
  loading: true,
  error: "",
  cart: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-cart-2.mittalminakshi.repl.co/cart"
        );
        console.log("response", response);
        if (response.status === 200) {
          dispatch({
            type: "FETCH_CART_SUCCESS",
            payload: { cart: response.data.cart },
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_CART_ERROR" });
      }
    })();
  }, [dispatch]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
