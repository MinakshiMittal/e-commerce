import { useFilter } from "../Contexts";

export const Filter = () => {
  const {
    state: { showFastDeliveryOnly, showInventoryAll },
    dispatch: filterDispatch,
  } = useFilter();
  return (
    <fieldset style={{ marginTop: "1rem" }}>
      <legend> Filters </legend>
      <label>
        <input
          type="checkbox"
          checked={showInventoryAll}
          onChange={() => filterDispatch({ type: "TOGGLE_INVENTORY" })}
        />
        Include Out of Stock
      </label>

      <label>
        <input
          type="checkbox"
          checked={showFastDeliveryOnly}
          onChange={() => filterDispatch({ type: "TOGGLE_DELIVERY" })}
        />
        Fast Delivery Only
      </label>
      {/* <label style={{ display: "block", marginTop: "1rem" }}>
        Price Range
        <input type="range" />
      </label> */}
    </fieldset>
  );
};
