import React, { createElement, useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { useLocation, matchPath, useNavigate, PathMatch } from "react-router";

import { ImCart } from "react-icons/im";
import { MdLocalShipping } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";

import { Outlet } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import cl from "../constants/color/color";
import Wizard from "../components/Checkout/Wizard";

// const pathName = ["cart", "ship-and-pay"];
// const reactSvgComponentToMarkupString = (
//   Component: IconType,
//   props: Record<string, string>
// ) =>
//   `data:image/svg+xml,${encodeURIComponent(
//     renderToStaticMarkup(createElement(Component, props))
//   )}`;
enum pathNameList {
  "ship-and-pay" = "ship-and-pay",
  "cart" = "cart",
  "order-completed" = "order-completed",
}
const Checkout = () => {
  const [currentPath, setCurrentPath] = useState<string | null>();
  const res = useLocation();
  console.log({ res });
  const { pathname } = useLocation();

  const isCart = matchPath("/checkout/cart", pathname);
  const isShipping = matchPath("/checkout/ship-and-pay", pathname);
  const isComplete = matchPath("/checkout/order-complete", pathname);
  console.log({ isCart });
  console.log({ isShipping });

  useEffect(() => {
    console.log("pathName變動", pathname);
    const newPathName = pathname.substring(pathname.lastIndexOf("/") + 1);
    console.log({ newPathName });
    // setCurrentPath(
    //   [isCart, isShipping, isComplete]
    //     .find((item) => item)
    //     ?.pathname.substring(10)
    // );
    setCurrentPath(pathNameList[newPathName as keyof typeof pathNameList]);
  }, [pathname]);

  return (
    <Container>
      <Wizard currentPath={currentPath} />
      <Outlet />
    </Container>
  );
};
const Container = styled.div`
  @media (min-width: 1000px) {
    padding: 10rem 0 5rem 0;
  }
  padding: 5rem 0;
`;

export default Checkout;
