import React, { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { RouteConfig } from "./routes/config";
import GlobalCss from "./styles/global.css";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import ScrollToTop from "./components/Common/ScrollToTop";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { token } = useAppSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollToTop>
        <Navbar />
        <GlobalCss />
        <Suspense fallback={<div>loading The Page</div>}>
          <RouteConfig token={token} />
          <Footer />
        </Suspense>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
