export const filterReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_INVENTORY":
      return (state = {
        ...state,
        showInventoryAll: !state.showInventoryAll,
      });

    case "TOGGLE_DELIVERY":
      return (state = {
        ...state,
        showFastDeliveryOnly: !state.showFastDeliveryOnly,
      });

    case "TOGGLE_DISCOUNT":
      return (state = {
        ...state,
        showDiscountOnly: !state.showDiscountOnly,
      });

    default:
      return state;
  }
};
