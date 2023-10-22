import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import BackToTopButton from "../backToTop/backToTop";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="contetn">{children}</div>
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
