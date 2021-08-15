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
          quantity: 1,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(response);

      if (response.status === 200) {
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: { itemsInWishlist },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const response = await axios.dele(
        `https://mitra-cart-2.mittalminakshi.repl.co/wishlist/${productId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return { addToWishlist, removeFromWishlist };
};
