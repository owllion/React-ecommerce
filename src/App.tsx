import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import "react-circular-progressbar/dist/styles.css";

import { RouteConfig } from "./routes/config";
import GlobalCss from "./styles/global.css";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import ScrollToTop from "./components/Common/ScrollToTop";
import Lottie from "./components/Common/Lottie";
import SelectSizePopup from "./components/Product/SelectSizePopup";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { showPopup } = useAppSelector((state) => state.common || {});

  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      {showPopup && <SelectSizePopup />}

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
