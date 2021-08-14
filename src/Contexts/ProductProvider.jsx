import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../Reducers";

const ProductContext = createContext();

const productInitialState = {
  loading: true,
  error: "",
  products: [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, productInitialState);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-cart-2.mittalminakshi.repl.co/products"
        );
        console.log("response", response);
        if (response.status === 200) {
          dispatch({
            type: "FETCH_PRODUCTS_SUCCESS",
            payload: { products: response.data.products },
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_PRODUCTS_ERROR" });
      }
    })();
  }, [dispatch]);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
