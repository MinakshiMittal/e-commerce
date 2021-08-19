import axios from "axios";
import { useAuth, useCart } from "../Contexts";

export const useCartActions = () => {
  const { token } = useAuth();
  const { dispatch: cartDispatch } = useCart();

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

      if (response.status === 200) {
        cartDispatch({
          type: "ADD_TO_CART",
          payload: { itemsInCart: response.data.cart.itemsInCart },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await axios.delete(
        `https://mitra-cart-2.mittalminakshi.repl.co/cart/${productId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log(response);

      if (response.status === 200) {
        cartDispatch({
          type: "REMOVE_FROM_CART",
          payload: { itemsInCart: response.data.cart.itemsInCart },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      console.log(productId, quantity);

      const {
        data: { cart },
        status,
      } = await axios.post(
        `https://mitra-cart-2.mittalminakshi.repl.co/cart/${productId}`,
        {
          quantity: quantity,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(
        "increment",
        cart,
        "id",
        cart.itemsInCart.product,
        "quan",
        cart.itemsInCart.quantity
      );
      if (status === 200) {
        cartDispatch({
          type: "UPDATE_QUANTITY",
          payload: {
            _id: cart.itemsInCart.product,
            quantity: cart.itemsInCart.quantity,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { addToCart, removeFromCart, updateQuantity };
};
