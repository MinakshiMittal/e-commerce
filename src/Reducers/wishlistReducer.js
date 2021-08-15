export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_WISHLIST_SUCCESS":
      return {
        ...state,
        itemsInWishlist: [...action.payload.itemsInWishlist],
      };

    case "FETCH_WISHLIST_ERROR":
      return {
        ...state,
        error: "Something went wrong",
      };

    default:
      return state;
  }
};
