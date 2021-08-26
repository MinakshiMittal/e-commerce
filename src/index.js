import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ProductProvider,
  AuthProvider,
  CategoryProvider,
  CartProvider,
  WishlistProvider,
  LoaderProvider,
  SortByProvider,
  FilterProvider,
} from "./Contexts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <CategoryProvider>
            <CartProvider>
              <WishlistProvider>
                <LoaderProvider>
                  <SortByProvider>
                    <FilterProvider>
                      <App />
                    </FilterProvider>
                  </SortByProvider>
                </LoaderProvider>
              </WishlistProvider>
            </CartProvider>
          </CategoryProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
