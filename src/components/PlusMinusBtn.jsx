import React from "react";
import styled, { css } from "styled-components";
import cl from "../constants/color/color";

const PlusMinusBtn = () => {
  return (
    <Container>
      <Plus>+</Plus>
      <Input value="1" maxLength={2} min="1" max="99" />
      <Minus>-</Minus>
    </Container>
  );
};

const baseBtn = css`
  width: 1.8rem;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 30px;
  /* border-radius: 50%; */
  /* background-color: ${cl.yellow}; */
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  background: ${cl.lightGray};
  border-radius: 12px;
  /* padding: 8px; */
  padding: 10px 8px 10px 2px;
`;
const Plus = styled.button`
  ${baseBtn}
`;
const Minus = styled.button`
  ${baseBtn}
`;
const Input = styled.input`
  text-align: center;
  padding: 0 0.2rem;
  width: 3rem;
  border: none;
  background: ${cl.transparent};
  &:focus {
    outline: transparent;
  }
`;

export default PlusMinusBtn;
