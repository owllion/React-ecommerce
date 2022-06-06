import React from "react";

import styled from "styled-components";
import cl from "../constants/color/color";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Slider = () => {
  return (
    <Container>
      <Arrow>
        <IoMdArrowDropleft />
      </Arrow>
      <Arrow>
        <IoMdArrowDropright />
      </Arrow>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 5rem;
  background: coral;
`;
const Arrow = styled.div`
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  background: ${cl.arrowBg};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Slider;
