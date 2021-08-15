export const cartReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_CART_SUCCESS":
      return {
        ...state,
        itemsInCart: [...action.payload.itemsInCart],
      };

    case "FETCH_CART_ERROR":
      return {
        ...state,
        error: "Something went wrong",
      };

    default:
      return state;
  }
};
