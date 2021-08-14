import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  ProductListingPage,
  RouteNotFound,
  Login,
  SignUp,
  CategoryWiseProductListingPage,
} from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/categories/:categoryId"
          element={<CategoryWiseProductListingPage />}
        />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
