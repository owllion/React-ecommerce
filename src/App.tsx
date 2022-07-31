import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { RouteConfig } from "./routes/config";
import GlobalCss from "./styles/global.css";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import HeaderSearch from "./components/Common/HeaderSearch";
import ScrollToTop from "./components/Common/ScrollToTop";
import { useAppSelector } from "./store/hooks";
const App = () => {
  const { showSearch } = useAppSelector((state) => state.common);
  return (
    <BrowserRouter>
      {/* {showSearch && <HeaderSearch />} */}

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
