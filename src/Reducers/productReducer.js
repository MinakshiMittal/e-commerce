export const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: [...action.payload.products],
      };

    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        error: "Something Went Wrong",
      };

    default:
      return state;
  }
};
