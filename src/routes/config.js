import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "../components/Route/ProtectedRoute";
import store from "../store/store";

const { token } = store.getState().auth;

const Home = lazy(() => import("../pages/Home"));

const Auth = lazy(() => import("../pages/Auth.tsx"));
const WelcomeView = lazy(() => import("../components/Auth/WelcomeView.tsx"));
const CheckEmail = lazy(() => import("../components/Auth/CheckEmail.tsx"));
const HaveAccount = lazy(() => import("../components/Auth/HaveAccount.tsx"));
const Registration = lazy(() => import("../components/Auth/Registration.tsx"));
const SendLinkNotification = lazy(() =>
  import("../components/Auth/SendLinkNotification")
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
const Account = lazy(() => import("../components/UserSetting/Account.tsx"));
const FavList = lazy(() => import("../components/UserSetting/FavList.tsx"));
const OrderList = lazy(() => import("../components/UserSetting/OrderList.tsx"));
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
          path: "reset-password",
          element: <ResetPassword />,
        },
        {
          path: ":linkType/notification",
          element: <SendLinkNotification />,
        },
      ],
    },

    { path: "/product-list", element: <ProductList /> },
    { path: "/product-detail/:id", element: <ProductDetail /> },

    {
      path: "/checkout",
      element: (
        <ProtectedRoute token={token}>
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
        <ProtectedRoute token={token}>
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
