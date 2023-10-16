import React, { useContext } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import Filter from "../../components/filter/filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  const addCart = () => {
    dispatch(addToCart("shirt"));
  };
  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };
  return (
    <Layout>
      <div className="flex gap-5 justify-center">
        <button className="bg-gray-300 p-5" onClick={() => addCart()}>
          add to cart
        </button>
        <button className="bg-gray-300 p-5" onClick={() => deleteCart()}>
          delete to cart
        </button>
      </div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Testimonial />
    </Layout>
  );
};

export default Home;
