import { useRoutes } from "react-router-dom";
import ProductList from "../pages/ProductList.jsx";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Settings from "../pages/Settings.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import NotFound from "../pages/NotFound.jsx";
import Checkout from "../pages/Checkout.jsx";
import ShipAndPay from "../pages/ShipAndPay.jsx";
import Account from "../components/settings/Account.jsx";
import FavList from "../components/settings/FavList.jsx";
import AccountResetPwd from "../components/settings/AccountResetPwd.jsx";
import OrderComplete from "../components/OrderComplete.jsx";
import OrderList from "../components/settings/OrderList.jsx";
import OrderDetail from "../pages/OrderDetail.jsx";

export const RouteConfig = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
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
