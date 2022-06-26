import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));

const Login = lazy(() => import("../pages/Login.jsx"));
const WelcomeView = lazy(() => import("../components/login/WelcomeView.jsx"));
const CheckEmail = lazy(() => import("../components/login/CheckEmail.jsx"));
const HaveAccount = lazy(() => import("../components/login/HaveAccount.jsx"));
const Registration = lazy(() => import("../components/login/Registration.jsx"));
const SendResetLinkNotification = lazy(() =>
  import("../components/login/SendResetLinkNotification")
);
const ForgotPassword = lazy(() =>
  import("../components/login/ForgotPassword.jsx")
);
const ResetPassword = lazy(() =>
  import("../components/login/ResetPassword.jsx")
);

const ProductList = lazy(() => import("../pages/ProductList.jsx"));
const ProductDetail = lazy(() => import("../pages/ProductDetail.jsx"));

const Settings = lazy(() => import("../pages/Settings.jsx"));
const Account = lazy(() => import("../components/settings/Account.jsx"));
const FavList = lazy(() => import("../components/settings/FavList.jsx"));
const OrderList = lazy(() => import("../components/settings/OrderList.jsx"));
const OrderDetail = lazy(() => import("../pages/OrderDetail.jsx"));
const AccountResetPwd = lazy(() =>
  import("../components/settings/AccountResetPwd.jsx")
);

const Checkout = lazy(() => import("../pages/Checkout.jsx"));
const Cart = lazy(() => import("../pages/Cart"));
const ShipAndPay = lazy(() => import("../pages/ShipAndPay.jsx"));
const OrderComplete = lazy(() => import("../components/OrderComplete.jsx"));

const NotFound = lazy(() => import("../pages/NotFound.jsx"));

export const RouteConfig = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
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
          path: "send-link-notification",
          element: <SendResetLinkNotification />,
        },
      ],
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },
    { path: "/product-list", element: <ProductList /> },
    { path: "/product-detail/:id", element: <ProductDetail /> },
    { path: "/cart", element: <Cart /> },
    {
      path: "/checkout",
      element: <Checkout />,
      children: [
        {
          path: "cart",
          element: <Cart />,
        },
        { path: "ship-and-pay", element: <ShipAndPay /> },
        { path: "order-complete", element: <OrderComplete /> },
      ],
    },
    {
      path: "/settings",
      element: <Settings />,
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
          children: [
            {
              path: "order-detail/:id",
              element: <OrderDetail />,
            },
          ],
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};
