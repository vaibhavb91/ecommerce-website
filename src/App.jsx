import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Order from "../src/pages/order/Order";
import Cart from "../src/pages/cart/Cart";
import Dashboard from "../src/pages/admin/dashboard/Dashboard";
import Nopage from "./pages/nopage/Nopage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/productInfo";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <MyState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Signup />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/updateproduct" element={<UpdateProduct />} />
        <Route path="/*" element={<Nopage />} />
      </Routes>
      <ToastContainer />
    </MyState>
  );
};

export default App;
