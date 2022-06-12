import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RouteConfig } from "./routes/config";

import GlobalCss from "./styles/global.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalCss />
      <RouteConfig />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
