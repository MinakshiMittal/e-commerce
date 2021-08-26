import { createContext, useContext, useReducer } from "react";
import { sortByReducer } from "../Reducers";

export const SortByContext = createContext();

export const SortByProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sortByReducer, { sorBy: null });

  return (
    <SortByContext.Provider value={{ state, dispatch }}>
      {children}
    </SortByContext.Provider>
  );
};

export const useSortBy = () => {
  return useContext(SortByContext);
};
