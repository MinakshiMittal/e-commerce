export const getSortedData = (productList, sortBy) => {
  if (sortBy === "PRICE_HIGH_TO_LOW") {
    return productList.sort((a, b) => b["price"] - a["price"]);
  }

  if (sortBy === "PRICE_LOW_TO_HIGH") {
    return productList.sort((a, b) => a["price"] - b["price"]);
  }
  return productList;
};

export function getFilteredData(
  productList,
  { showFastDeliveryOnly, showInventoryAll, showDiscountOnly }
) {
  console.log(productList);
  return productList
    .filter(({ isFastDelivery }) =>
      showFastDeliveryOnly ? isFastDelivery : true
    )
    .filter(({ discount }) => (showDiscountOnly ? discount : true));

  // .filter(({ inStock }) => (showInventoryAll ? true : inStock))
}
