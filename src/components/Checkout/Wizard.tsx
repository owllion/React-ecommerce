import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { IconType } from "react-icons";
import cl from "../../constants/color/color";
import { useLocation, matchPath, useNavigate, PathMatch } from "react-router";

enum pathNameList {
  "ship-and-pay" = "ship-and-pay",
  "cart" = "cart",
  "order-complete" = "order-complete",
}

const Wizard = () => {
  const [currentPath, setCurrentPath] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    const newPathName = pathname.substring(pathname.lastIndexOf("/") + 1);
    setCurrentPath(newPathName);
  }, [pathname]);

  return (
    <ProgressTrack>
      <StageItem
        fillConnector={currentPath !== "cart"}
        fillIndicator={true}
        fillTitle={true}
      >
        Step1
      </StageItem>
      <StageItem
        fillTitle={
          currentPath === "ship-and-pay" || currentPath === "order-complete"
        }
        fillConnector={currentPath === "order-complete"}
        fillIndicator={
          currentPath === "ship-and-pay" || currentPath === "order-complete"
        }
      >
        Step2
      </StageItem>
      <StageItem
        fillConnector={false}
        fillIndicator={currentPath === "order-complete"}
        fillTitle={currentPath === "order-complete"}
        isLast={true}
      >
        Done
      </StageItem>
    </ProgressTrack>
  );
};
const ProgressTrack = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  list-style-type: none;
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
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
const pulse = keyframes`
   0% {
    box-shadow: 0 0 0 0 rgba(0, 128 ,128, 0.4);
  }
  70% {
      box-shadow: 0 0 0 12px rgba(0, 128 ,128, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(0, 128 ,128, 0);
  }

`;
const StageItem = styled.li<{
  isLast?: boolean;
  fillConnector: boolean;
  fillIndicator: boolean;
  fillTitle: boolean;
}>`
  font-size: 1rem;
  width: 100%;
  position: relative;
  z-index: 1;
  font-weight: 900;
  color: ${({ fillTitle }) =>
    fillTitle ? ` ${cl.green}` : ` ${cl.textLightGray}`};
  &:before {
    content: " ";
    background-color: rgb(155, 155, 155);
    border: 10px solid #fff;
    border-radius: 50%;
    display: block;
    width: 30px;
    height: 30px;
    margin: 9px auto;
    box-shadow: 1px 1px 3px #606060;
    transition: all;
    ${({ fillIndicator }) =>
      fillIndicator &&
      css`
        font-family: "Font Awesome 5 free";
        content: "\f00c";
        font-size: 11px;
        font-weight: 600;
        color: #fff;
        padding: 6px;
        background-color: ${cl.green};
        border: 1px solid ${cl.green};
        box-shadow: 0 0 0 7.5px rgb(0 128 128 / 11%);
        animation: ${pulse} 1.5s infinite;
      `}
  }
  &:after {
    content: "";
    width: 100%;
    height: 4px;
    background: #d5dbdb;
    position: absolute;
    margin: auto;
    left: 50%;
    top: 26px;
    z-index: -1;
    transition: width 1s ease-in;
    ${({ fillConnector }) =>
      fillConnector &&
      css`
        ${afterAnimation}
      `}
  }
  ${({ isLast }) =>
    isLast &&
    `&:last-child:after {
    display: none;
  }`}
`;

export default Wizard;
