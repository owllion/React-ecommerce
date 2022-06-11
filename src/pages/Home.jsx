import React from "react";

import Hero from "../components/Hero";
import HomeCategories from "../components/HomeCategories";
import HomeProducts from "../components/HomeProducts";
import Newsletter from "../components/Newsletter";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeCategories />
      <HomeProducts />
      <Newsletter />
      <Sponsors />
    </>
  );
};

export default Home;
