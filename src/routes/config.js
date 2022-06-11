import { useRoutes } from "react-router-dom";
import ProductList from "../pages/ProductList.jsx";
import Home from "../pages/Home";

export const RouteConfig = () => {
  let element = useRoutes([
    //{ path: "dashboard", element: <Dashboard /> },
    { path: "/", element: <Home /> },
    { path: "/productList", element: <ProductList /> },
    // { path: "*", element: <NotFound /> },
  ]);

  return element;
};
