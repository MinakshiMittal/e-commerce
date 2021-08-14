import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  ProductsListingPage,
  RouteNotFound,
  Login,
  SignUp,
} from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsListingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
