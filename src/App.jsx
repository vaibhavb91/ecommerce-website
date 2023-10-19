import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Allproducts from "../src/pages/allproducts/Allproducts";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MyState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Signup />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route
          path="/addproduct"
          element={
            <ProtectedRouteForAdmin>
              <AddProduct />
            </ProtectedRouteForAdmin>
          }
        />
        <Route
          path="/updateproduct"
          element={
            <ProtectedRouteForAdmin>
              <UpdateProduct />
            </ProtectedRouteForAdmin>
          }
        />
        <Route path="/*" element={<Nopage />} />
      </Routes>
      <ToastContainer />
    </MyState>
  );
};

export default App;

// user route
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// admin route
const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "vaibhavbaghdane1234@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
