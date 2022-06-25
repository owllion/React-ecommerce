import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RouteConfig } from "./routes/config";

import GlobalCss from "./styles/global.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <GlobalCss />
        <RouteConfig />
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
