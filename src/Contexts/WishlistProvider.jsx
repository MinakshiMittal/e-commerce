import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../Reducers";

const WishlistContext = createContext();

const wishlistInitialState = {
  loading: true,
  error: "",
  itemsInWishlist: [],
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, wishlistInitialState);

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
