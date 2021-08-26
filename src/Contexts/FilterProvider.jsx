import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducers";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    showFastDeliveryOnly: false,
    showInventoryAll: true,
  });

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
