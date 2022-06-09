import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Newsletter />
    </>
  );
};

export default Home;
