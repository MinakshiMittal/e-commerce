export const categoryReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        categories: [...action.payload.categories],
      };

    case "FETCH_CATEGORIES_ERROR":
      return {
        ...state,
        error: "Something Went Wrong",
      };

    default:
      return state;
  }
};
