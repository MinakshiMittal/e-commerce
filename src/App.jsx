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
import { getSortedData, getFilteredData } from "./Utils/filterAndSort";

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
