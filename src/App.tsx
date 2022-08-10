import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { RouteConfig } from "./routes/config";
import GlobalCss from "./styles/global.css";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import ScrollToTop from "./components/Common/ScrollToTop";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import { useAppSelector } from "./store/hooks";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-loading-skeleton/dist/skeleton.css";
import Lottie from "./components/Common/Lottie";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));

const Auth = lazy(() => import("./pages/Auth"));
const WelcomeView = lazy(() => import("./components/Auth/WelcomeView"));
const CheckEmail = lazy(() => import("./components/Auth/CheckEmail"));
const HaveAccount = lazy(() => import("./components/Auth/HaveAccount"));
const Registration = lazy(() => import("./components/Auth/Registration"));
const SendLinkNotification = lazy(
  () => import("./components/Auth/SendLinkNotification")
);
const VerifyEmail = lazy(() => import("./components/Auth/VerifyEmail"));
const ForgotPassword = lazy(() => import("./components/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./components/Auth/ResetPassword"));

const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

const Settings = lazy(() => import("./pages/Settings"));
const Account = lazy(() => import("./components/UserSetting/Account"));
const FavList = lazy(() => import("./components/UserSetting/FavList"));
const OrderList = lazy(() => import("./components/UserSetting/OrderList"));
const OrderDetail = lazy(() => import("./pages/OrderDetail"));
const AccountResetPwd = lazy(
  () => import("./components/UserSetting/AccountResetPwd")
);

const Checkout = lazy(() => import("./pages/Checkout"));
const Cart = lazy(() => import("./pages/Cart"));
const ShipAndPay = lazy(() => import("./pages/ShipAndPay"));
const OrderComplete = lazy(() => import("./components/Checkout/OrderComplete"));

const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const accessToken = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  useEffect(() => {
    if (accessToken && refreshToken) {
      setIsAuthenticated(true);
    }
  }, [accessToken, refreshToken]);

  // const { token } = useAppSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollToTop>
        <Navbar />
        <GlobalCss />
        <Suspense fallback={<Lottie jsonName="loading" text="loading" />}>
          <RouteConfig />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />}>
              <Route path="welcome" element={<WelcomeView />} />
              <Route path="check-email" element={<CheckEmail />} />
              <Route path="user-login" element={<HaveAccount />} />
              <Route path="registration" element={<Registration />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route
                path="reset-password/token/:token"
                element={<ResetPassword />}
              />
              <Route
                path=":linkType/notification"
                element={<SendLinkNotification />}
              />
              <Route path="verify-email/:token" element={<VerifyEmail />} />
            </Route>
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            >
              <Route path="account" element={<Account />} />
              <Route path="fav-list" element={<FavList />} />
              <Route path="account-reset-pwd" element={<AccountResetPwd />} />
              <Route path="order-list" element={<OrderList />}>
                <Route path="order-detail/:id" element={<OrderDetail />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes> */}
          <Footer />
        </Suspense>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
