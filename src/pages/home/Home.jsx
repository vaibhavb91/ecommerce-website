import React, { useContext } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import Filter from "../../components/filter/filter";
import ProductCard from "../../components/productCard/ProductCard";
const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
    </Layout>
  );
};

export default Home;
