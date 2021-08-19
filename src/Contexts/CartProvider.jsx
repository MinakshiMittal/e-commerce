import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../Reducers";
import { useAuth } from "../Contexts";

const CartContext = createContext();

const cartInitialState = {
  loading: true,
  error: "",
  itemsInCart: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-cart-2.mittalminakshi.repl.co/cart",
          {
            headers: {
              authorization: token,
            },
          }
        );
        if (response.status === 200) {
          dispatch({
            type: "FETCH_CART_SUCCESS",
            payload: { itemsInCart: response.data.cart.itemsInCart },
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_CART_ERROR" });
      }
    })();
  }, [dispatch, token, state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
