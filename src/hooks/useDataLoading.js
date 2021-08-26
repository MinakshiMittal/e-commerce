import { useAuth, useCart, useWishlist } from "../Contexts";
import axios from "axios";
import { useEffect } from "react";

export const useDataLoading = () => {
  const { token } = useAuth();
  const { dispatch: cartDispatch, state: cartState } = useCart();
  const { dispatch: wishlistDispatch, state: wishlistState } = useWishlist();

  useEffect(() => {
    (async function () {
      if (token) {
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
            cartDispatch({
              type: "FETCH_CART_SUCCESS",
              payload: { itemsInCart: response.data.cart.itemsInCart },
            });
          }
        } catch (error) {
          cartDispatch({ type: "FETCH_CART_ERROR" });
        }
      }
    })();
  }, [cartDispatch, token, cartState]);

  useEffect(() => {
    (async function () {
      if (token) {
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
            wishlistDispatch({
              type: "FETCH_WISHLIST_SUCCESS",
              payload: {
                itemsInWishlist: response.data.wishlist.itemsInWishlist,
              },
            });
          }
        } catch (error) {
          wishlistDispatch({ type: "FETCH_WISHLIST_ERROR" });
        }
      }
    })();
  }, [wishlistDispatch, token]);
};
