import React from "react";

import styled from "styled-components";
import cl from "../constants/color/color";

const AddToCartBtn = () => {
  return <Container>Add To Cart</Container>;
};

const Container = styled.button`
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.8rem;
  display: inline-block;
  border-radius: 8px;
  text-align: center;
  position: relative;
  z-index: 1;
  min-width: 8rem;
  transition: all 0.3s ease-in;
  color: ${cl.white};
  background: black;
  overflow: hidden;
  &::before {
    content: "";
    height: 0%;
    width: 100%;
    background: ${cl.green};
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: 0.5s;
    border-radius: 50% 50% 0 0;
  }
  &:hover::before {
    height: 180%;
  }
`;

export default AddToCartBtn;
