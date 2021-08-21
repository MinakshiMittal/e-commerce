import axios from "axios";
import { useAuth, useWishlist } from "../Contexts";

export const useWishlistActions = () => {
  const { token } = useAuth();
  const {
    dispatch: wishlistDispatch,
    state: { itemsInWishlist },
  } = useWishlist();

  console.log(itemsInWishlist);

  const addToWishlist = async (productId) => {
    try {
      const response = await axios.post(
        `https://mitra-cart-2.mittalminakshi.repl.co/wishlist`,
        {
          product: productId,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log("add", response);

      if (response.status === 200) {
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: { itemsInWishlist: response.data.wishlist.itemsInWishlist },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const response = await axios.delete(
        `https://mitra-cart-2.mittalminakshi.repl.co/wishlist/${productId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log("remove", response);

      if (response.status === 200) {
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: { itemsInWishlist: response.data.wishlist.itemsInWishlist },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { addToWishlist, removeFromWishlist };
};
