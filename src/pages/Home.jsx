import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Newsletter />
      <Sponsors />
      <Footer />
    </>
  );
};

export default Home;
