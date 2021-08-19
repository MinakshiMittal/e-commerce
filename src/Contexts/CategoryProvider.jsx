import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { categoryReducer } from "../Reducers";

const CategoryContext = createContext();

const categoryInitialState = {
  loading: true,
  error: "",
  categories: [],
};

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, categoryInitialState);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-cart-2.mittalminakshi.repl.co/categories"
        );
        if (response.status === 200) {
          dispatch({
            type: "FETCH_CATEGORIES_SUCCESS",
            payload: { categories: response.data.categories },
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_CATEGORIES_ERROR" });
      }
    })();
  }, [dispatch]);

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => {
  return useContext(CategoryContext);
};
