import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { wishlistReducer } from "../Reducers";
import { useAuth } from "../Contexts";

const WishlistContext = createContext();

const wishlistInitialState = {
  loading: true,
  error: "",
  itemsInWishlist: [],
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, wishlistInitialState);
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-cart-2.mittalminakshi.repl.co/wishlist",
          {
            headers: {
              authorization: token,
            },
          }
        );
        if (response.status === 200) {
          dispatch({
            type: "FETCH_WISHLIST_SUCCESS",
            payload: {
              itemsInWishlist: response.data.wishlist.itemsInWishlist,
            },
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_WISHLIST_ERROR" });
      }
    })();
  }, [dispatch, token, state]);

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
