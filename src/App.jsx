import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import Products from "./components/Products";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Products />}></Route>
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
