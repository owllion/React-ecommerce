import React from "react";
import styled from "styled-components";
import cl from "../../constants/color/color";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SliderBtn = ({ type, clickHandler }) => {
  return (
    <Btn onClick={() => clickHandler()}>
      {type === "prev" ? <IoIosArrowBack /> : <IoIosArrowForward />}
    </Btn>
  );
};

const Btn = styled.button`
  border: none;
  cursor: pointer;
  display: block;
  color: ${cl.dark};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  margin-right: 1rem;
  background: rgba(241, 232, 214, 0.4);
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

export default SliderBtn;
