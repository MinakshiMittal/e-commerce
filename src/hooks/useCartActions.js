import axios from "axios";
import { useAuth, useCart } from "../Contexts";

export const useCartActions = () => {
  const { token } = useAuth();
  const {
    dispatch: cartDispatch,
    state: { itemsInCart },
  } = useCart();

  console.log(itemsInCart);

  const addToCart = async (productId) => {
    try {
      const response = await axios.post(
        `https://mitra-cart-2.mittalminakshi.repl.co/cart`,
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
        cartDispatch({ type: "ADD_TO_CART", payload: { itemsInCart } });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await axios.dele(
        `https://mitra-cart-2.mittalminakshi.repl.co/cart/${productId}`,
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

  const updateCart = async (productId, quantity) => {
    try {
      const response = await axios.post(
        `https://mitra-cart-2.mittalminakshi.repl.co/cart/${productId}`,
        {
          quantity,
        },
        {
          header: {
            authorization: token,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return { addToCart, removeFromCart, updateCart };
};
