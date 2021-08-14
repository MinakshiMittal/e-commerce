export const cartReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_CART_SUCCESS":
      return {
        ...state,
        cart: [...action.payload.cart],
      };

    case "FETCH_CART_ERROR":
      return {
        ...state,
        error: "Something went wrong",
      };

    case "ADD_TO_CART":
      return { ...state, cart: { ...state.cart } };
  }
};
