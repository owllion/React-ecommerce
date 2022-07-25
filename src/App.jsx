import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { RouteConfig } from "./routes/config";
import GlobalCss from "./styles/global.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HeaderSearch from "./components/HeaderSearch.jsx";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      {/* <HeaderSearch /> */}
      <ScrollToTop>
        <Navbar />
        <GlobalCss />
        <Suspense fallback={<div>loading The Page</div>}>
          <RouteConfig />
          <Footer />
        </Suspense>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
