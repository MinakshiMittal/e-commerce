import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  ProductListingPage,
  RouteNotFound,
  Login,
  SignUp,
  CategoryWiseProductListingPage,
  Cart,
  Wishlist,
  Checkout,
  ProductDetailsPage,
} from "./Pages";
import { PrivateRoute } from "./Components";
import { useDataLoading } from "./hooks/useDataLoading";
import { useSortBy, useProducts, useFilter } from "./Contexts";

const getSortedData = (productList, sortBy) => {
  if (sortBy === "PRICE_HIGH_TO_LOW") {
    return productList.sort((a, b) => b["price"] - a["price"]);
  }

  if (sortBy === "PRICE_LOW_TO_HIGH") {
    return productList.sort((a, b) => a["price"] - b["price"]);
  }
  return productList;
};

function getFilteredData(
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

function App() {
  useDataLoading();

  const {
    state: { sortBy },
  } = useSortBy();
  const {
    state: { showFastDeliveryOnly, showInventoryAll, showDiscountOnly },
  } = useFilter();
  const {
    state: { products },
  } = useProducts();

  console.log(products);

  const sortedData = getSortedData(products, sortBy);
  const filteredData = getFilteredData(sortedData, {
    showFastDeliveryOnly,
    showInventoryAll,
    showDiscountOnly,
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ProductListingPage filteredData={filteredData} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/categories/:categoryId"
          element={<CategoryWiseProductListingPage />}
        />
        <PrivateRoute path="/cart" element={<Cart />} />
        <PrivateRoute path="/wishlist" element={<Wishlist />} />
        <PrivateRoute path="/checkout" element={<Checkout />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
