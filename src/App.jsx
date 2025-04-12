import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Products />}></Route>
            <Route path="/add" element={<AddProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
