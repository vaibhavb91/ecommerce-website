import React, { useContext } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import Filter from "../../components/filter/filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="flex gap-5 justify-center"></div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center m-10 mb-4">
        <Link to="allproducts">
          <button className="bg-gray-300 px-5 py-2 rounded-xl">
            View More
          </button>
        </Link>
      </div>
      <Testimonial />
    </Layout>
  );
};

export default Home;
