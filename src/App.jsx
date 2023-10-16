import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Order from "../src/pages/order/Order";
import Cart from "../src/pages/cart/Cart";
import Dashboard from "../src/pages/admin/dashboard/Dashboard";
import Nopage from "./pages/nopage/Nopage";
import MyState from "./context/data/myState";
const App = () => {
  return (
    <MyState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Nopage />} />
      </Routes>
    </MyState>
  );
};

export default App;
