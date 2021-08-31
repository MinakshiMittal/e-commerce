import { useFilter } from "../../Contexts";
import "./Filter.css";

export const Filter = () => {
  const {
    state: { showFastDeliveryOnly, showDiscountOnly },
    dispatch: filterDispatch,
  } = useFilter();
  console.log(showDiscountOnly);
  return (
    <fieldset style={{ marginTop: "1rem" }}>
      <legend style={{ color: "white", fontWeight: "900", fontSize: "1.2rem" }}>
        {" "}
        Filters{" "}
      </legend>
      {/* <label>
        <input
          type="checkbox"
          checked={showInventoryAll}
          onChange={() => filterDispatch({ type: "TOGGLE_INVENTORY" })}
        />
        Include Out of Stock
      </label> */}

      <label className="label-container">
        <input
          className="filter-checkbox"
          type="checkbox"
          checked={showFastDeliveryOnly}
          onChange={() => filterDispatch({ type: "TOGGLE_DELIVERY" })}
        />
        Fast Delivery Only
      </label>

      <label>
        <input
          className="filter-checkbox"
          type="checkbox"
          checked={showDiscountOnly}
          onChange={() => filterDispatch({ type: "TOGGLE_DISCOUNT" })}
        />
        Discount only
      </label>
      {/* <label style={{ display: "block", marginTop: "1rem" }}>
        Price Range
        <input type="range" />
      </label> */}
    </fieldset>
  );
};
