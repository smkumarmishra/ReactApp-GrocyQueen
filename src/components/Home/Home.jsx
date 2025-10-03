import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Process from "../Process/Process";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> remove now using react-dom*/}
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonial />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
