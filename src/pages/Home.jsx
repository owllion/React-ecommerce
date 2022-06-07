import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
