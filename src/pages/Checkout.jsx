import React, { createElement, useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { useLocation, matchPath, useNavigate } from "react-router";

import { ImCart } from "react-icons/im";
import { MdLocalShipping } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";

import { Outlet } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import cl from "../constants/color/color";

const ProgressList = [
  {
    icon: ImCart,
    name: "Cart",
  },
  {
    icon: MdLocalShipping,
    name: "Information",
  },
  {
    icon: BsFillBagCheckFill,
    name: "Finish",
  },
];
const pathName = ["cart", "ship-and-pay"];
const reactSvgComponentToMarkupString = (Component, props) =>
  `data:image/svg+xml,${encodeURIComponent(
    renderToStaticMarkup(createElement(Component, props))
  )}`;
const Checkout = () => {
  const [nowPath, setNowPath] = useState();
  const res = useLocation();
  console.log({ res });
  const { pathname } = useLocation();

  const isCart = matchPath("/checkout/cart", pathname);
  const isShipping = matchPath("/checkout/ship-and-pay", pathname);

  // const isComplete = matchPath("/checkout/ship-and-pay", pathname);
  // console.log({ isCart });
  // console.log({ isShipping });

  useEffect(() => {
    // console.log("有被觸發");
    // console.log(
    //   [isCart, isShipping].find((item) => item).pathname.substring(10)
    // );
    setNowPath(
      [isCart, isShipping].find((item) => item).pathname.substring(10)
    );
  }, [pathname]);
  return (
    <Container>
      <ProgressTrack>
        {ProgressList.map((item, index) => (
          <StageItem
            key={index}
            isLast={index === 2}
            color="black"
            iconName={item.icon}
            nowPath={nowPath}
            index={index}
          >
            {item.name}
          </StageItem>
        ))}
      </ProgressTrack>
      <Outlet />;
    </Container>
  );
};
const Container = styled.div`
  @media (min-width: 1000px) {
    padding: 10rem 0;
  }
  padding: 2rem 0;
`;
const ProgressTrack = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  list-style-type: none;
  width: 50%;
  margin: 0 auto;
`;
const nextStep = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }

`;
const afterAnimation = css`
  background: ${cl.green};
  animation: ${nextStep} 1s;
  animation-fill-mode: forwards;
`;
const StageItem = styled.li`
  font-size: 1rem;
  width: 100%;
  position: relative;
  z-index: 1;
  font-weight: 500;

  color: ${({ nowPath, index }) =>
    pathName[index] === nowPath ? `${cl.green}` : `${cl.dark}`};

  &:before {
    content: ${({ color, iconName }) =>
      `url(${reactSvgComponentToMarkupString(iconName, {
        color,
      })})`};

    display: block;
    font-size: 5rem;
    line-height: 24px;
    color: #d5dbdb;
    background: #ffffff;
    width: 80px;
    margin: 0 auto 5px auto;
  }
  &:after {
    content: "";
    width: 100%;
    height: 4px;
    background: #d5dbdb;
    position: absolute;
    margin: auto;
    left: 50%;
    top: 35px;
    z-index: -1;
    transition: width 1s ease-in;
  }
  ${({ isLast }) =>
    isLast &&
    `&:last-child:after {
    display: none;
  }`}
  ${({ nowPath }) => {
    if (nowPath === "ship-and-pay") {
      return css`
        &:first-child:after {
          ${afterAnimation}
        }
      `;
    }
    // if (nowPath === "success") {
    //   css`
    //     :nth-child(2):after {
    //       ${afterAnimation}
    //     }
    //   `;
    // }
  }}
`;

export default Checkout;
