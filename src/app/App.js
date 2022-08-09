import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Dashboard from "../Dashboard";
import CartManage from "../CartManage";
import UserRegistration from "../UserRegistration";
import ProductManage from "../ProductManage";
import Login from "../session/Login";

function App() {
  return (
      <Routes>
            <Route path="/" element={<Home/>}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductManage />} />
            <Route path="cart" element={<CartManage />} />
            <Route path="user" element={<UserRegistration />} />
          </Route>
      </Routes>
  );
}

export default App;
