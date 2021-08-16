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

    case "ADD_TO_CART":
      return {
        ...state,
        itemsInCart: [...action.payload.itemsInCart],
      };

    default:
      return state;
  }
};
