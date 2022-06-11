import React from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <Newsletter />
      <Sponsors />
    </>
  );
};

export default Home;
