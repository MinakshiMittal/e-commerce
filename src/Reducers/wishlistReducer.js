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

    case "ADD_TO_WISHLIST":
      console.log("payload", action.payload);
      return {
        ...state,
        itemsInWishlist: [...action.payload.itemsInWishlist],
      };

    case "REMOVE_FROM_WISHLIST":
      return { ...state, itemsInWishlist: [...action.payload.itemsInWishlist] };

    default:
      return state;
  }
};
