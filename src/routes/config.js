import { useRoutes } from "react-router-dom";
import ProductList from "../pages/ProductList.jsx";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Account from "../pages/Account";
import ProductDetail from "../pages/ProductDetail.jsx";
import NotFound from "../pages/NotFound.jsx";
import Checkout from "../pages/Checkout.jsx";
import ShipAndPay from "../pages/ShipAndPay.jsx";

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
      ],
    },
    { path: "/account", element: <Account /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};
