import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "../components/Route/ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));

const Auth = lazy(() => import("../pages/Auth.tsx"));
const WelcomeView = lazy(() => import("../components/Auth/WelcomeView.tsx"));
const CheckEmail = lazy(() => import("../components/Auth/CheckEmail.tsx"));
const HaveAccount = lazy(() => import("../components/Auth/HaveAccount.tsx"));
const Registration = lazy(() => import("../components/Auth/Registration.tsx"));
const SendLinkNotification = lazy(() =>
  import("../components/Auth/SendLinkNotification")
);
const VerifyEmail = lazy(() => import("../components/Auth/verify/VerifyEmail"));

const GithubLoginCallback = lazy(() =>
  import("../components/Auth/GithubLoginCallback")
);
const ForgotPassword = lazy(() =>
  import("../components/Auth/ForgotPassword.tsx")
);
const ResetPassword = lazy(() =>
  import("../components/Auth/ResetPassword.tsx")
);

const ProductList = lazy(() => import("../pages/ProductList.tsx"));
const ProductDetail = lazy(() => import("../pages/ProductDetail.tsx"));

const Settings = lazy(() => import("../pages/Settings.tsx"));
const Account = lazy(() =>
  import("../components/UserSetting/Account/Account.tsx")
);
const FavList = lazy(() => import("../components/UserSetting/FavList.tsx"));
const OrderList = lazy(() => import("../components/UserSetting/OrderList.tsx"));
const CouponList = lazy(() =>
  import("../components/UserSetting/CouponList.tsx")
);
const ReviewList = lazy(() =>
  import("../components/UserSetting/Review/ReviewList.tsx")
);

const OrderDetail = lazy(() => import("../pages/OrderDetail.tsx"));
const AccountResetPwd = lazy(() =>
  import("../components/UserSetting/AccountResetPwd.tsx")
);

const Checkout = lazy(() => import("../pages/Checkout.tsx"));
const Cart = lazy(() => import("../pages/Cart"));
const ShipAndPay = lazy(() => import("../pages/ShipAndPay.tsx"));
const OrderComplete = lazy(() =>
  import("../components/Checkout/OrderComplete.tsx")
);

const TermsofService = lazy(() => import("../pages/TermsOfService.jsx"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy.jsx"));

const NotFound = lazy(() => import("../pages/NotFound.tsx"));

export const RouteConfig = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "welcome",
          element: <WelcomeView />,
        },
        {
          path: "check-email",
          element: <CheckEmail />,
        },
        {
          path: "user-login",
          element: <HaveAccount />,
        },
        {
          path: "registration",
          element: <Registration />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "reset-password/token/:token",
          element: <ResetPassword />,
        },
        {
          path: ":linkType/notification",
          element: <SendLinkNotification />,
        },
        {
          path: "verify-email/:token",
          element: <VerifyEmail />,
        },

        {
          path: "github-login/callback",
          element: <GithubLoginCallback />,
        },
      ],
    },

    { path: "/product-list", element: <ProductList /> },
    { path: "/product-detail/:id", element: <ProductDetail /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/terms-of-services", element: <TermsofService /> },

    {
      path: "/checkout",
      element: (
        <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "ship-and-pay",
          element: <ShipAndPay />,
        },
        {
          path: "order-complete",
          element: <OrderComplete />,
        },
      ],
    },
    {
      path: "/settings",
      element: (
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "account",
          element: <Account />,
        },
        {
          path: "fav-list",
          element: <FavList />,
        },
        {
          path: "account-reset-pwd",
          element: <AccountResetPwd />,
        },
        {
          path: "order-list",
          element: <OrderList />,
        },
        {
          path: "coupon-list",
          element: <CouponList />,
        },
        {
          path: "review-list",
          element: <ReviewList />,
        },
      ],
    },
    {
      path: "order/detail/:id",
      element: <OrderDetail />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};
