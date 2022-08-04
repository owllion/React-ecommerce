import React, { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { RouteConfig } from "./routes/config";
import GlobalCss from "./styles/global.css";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import ScrollToTop from "./components/Common/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
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
