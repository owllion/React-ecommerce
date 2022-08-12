import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-loading-skeleton/dist/skeleton.css";

import { RouteConfig } from "./routes/config";
import GlobalCss from "./styles/global.css";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import ScrollToTop from "./components/Common/ScrollToTop";
import Lottie from "./components/Common/Lottie";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollToTop>
        <Navbar />
        <GlobalCss />
        <Suspense fallback={<Lottie jsonName="loading" text="loading" />}>
          <RouteConfig />

          <Footer />
        </Suspense>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
