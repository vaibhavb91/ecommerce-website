import React, { useContext } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import Filter from "../../components/filter/filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <Layout>
      <div className="flex gap-5 justify-center"></div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Testimonial />
    </Layout>
  );
};

export default Home;
