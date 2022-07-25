import React from "react";

import styled from "styled-components";
import cl from "../../constants/color/color";

const AddToCartBtn = () => {
  return <Container>Add To Cart</Container>;
};

// const Container = styled.button`
//   font-size: 0.9rem;
//   font-weight: 600;
//   padding: 0.8rem;
//   display: inline-block;
//   border-radius: 6px;
//   text-align: center;
//   position: relative;
//   z-index: 1;
//   min-width: 8rem;
//   color: ${cl.white};
//   background: black;
//   overflow: hidden;
//   font-weight: 500;
//   width: 150px;
//   &::before {
//     content: "";
//     height: 0%;
//     width: 100%;
//     background: ${cl.green};
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     z-index: -1;
//     transition: 0.5s;
//     border-radius: 50% 50% 0 0;
//   }
//   &:hover::before {
//     height: 180%;
//   }
// `;

const Container = styled.button`
  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all 0.4s;
  }

  &::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #28282d;
    border-radius: 10px;
  }

  &::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
  }

  &:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }

  &:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }

  &:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }
`;

export default AddToCartBtn;
