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
      console.log("payload", action.payload);
      return {
        ...state,
        itemsInCart: [...action.payload.itemsInCart],
      };

    case "UPDATE_QUANTITY":
      console.log("payload", action.payload._id);
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((product) => {
          if (product.product._id === action.payload._id) {
            return { ...product, quantity: action.payload.quantity };
          }
          return product;
        }),
      };

    case "DECREMENT_QUANTITY":
      console.log(action.payload);
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((product) => {
          if (product.product._id === action.payload.product.id) {
            return { ...product, quantity: action.payload.quantity - 1 };
          }
          return product;
        }),
      };

    case "REMOVE_FROM_CART":
      return { ...state, itemsInCart: [...action.payload.itemsInCart] };

    default:
      return state;
  }
};
