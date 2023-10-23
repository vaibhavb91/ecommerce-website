import React, { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
const BackToTopButton = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      style={{
        position: "fixed",
        bottom: 60,
        right: 5,
        zIndex: 1000,
        fontSize: "33px",
      }}
      className={`back-to-top ${isButtonVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <BsArrowUpCircleFill
        style={{ color: "#DB2777" }}
        className="hidden md:block"
      />
    </button>
  );
};

export default BackToTopButton;
