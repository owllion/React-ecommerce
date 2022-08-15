import React from "react";
import styled, { keyframes, css } from "styled-components";
import { IconType } from "react-icons";
import cl from "../../constants/color/color";
// const ProgressList = [
//   {
//     icon: ImCart,
//     name: "Cart",
//   },
//   {
//     icon: MdLocalShipping,
//     name: "Information",
//   },
//   {
//     icon: BsFillBagCheckFill,
//     name: "Finish",
//   },
// ];

interface IProps {
  currentPath: string | null | undefined;
}
const Wizard = ({ currentPath }: IProps) => {
  return (
    <ProgressTrack>
      <StageItem color="black" currentPath={currentPath}>
        Step1
      </StageItem>
      <StageItem color="black" currentPath={currentPath}>
        Step2
      </StageItem>
      <StageItem isLast={true} color="black" currentPath={currentPath}>
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
  currentPath: string | null | undefined;
  isLast?: boolean;
}>`
  font-size: 1rem;
  width: 100%;
  position: relative;
  z-index: 1;
  font-weight: 900;
  color: ${cl.green};
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
  }
  ${({ isLast }) =>
    isLast &&
    `&:last-child:after {
    display: none;
  }`}
  ${({ currentPath }) => {
    if (currentPath === "ship-and-pay") {
      return css`
        &:first-child:after {
          ${afterAnimation}
        }
      `;
    }
    if (currentPath === "order-complete") {
      return css`
        :nth-child(2):after {
          ${afterAnimation}
        }
      `;
    }
  }}
`;
export default Wizard;
