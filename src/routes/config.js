import { useRoutes } from "react-router-dom";
import ProductList from "../pages/ProductList.jsx";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Account from "../pages/Account";
import ProductDetail from "../pages/ProductDetail.jsx";
import NotFound from "../pages/NotFound.jsx";
import Checkout from "../pages/Checkout.jsx";

export const RouteConfig = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/productList", element: <ProductList /> },
    { path: "/productDetail/:id", element: <ProductDetail /> },
    { path: "/cart", element: <Cart /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/account", element: <Account /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};
