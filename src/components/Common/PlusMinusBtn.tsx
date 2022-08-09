import React from "react";
import styled, { css } from "styled-components";
import cl from "../../constants/color/color";

const PlusMinusBtn = () => {
  return (
    <Container>
      <Wrapper>
        <Plus>+</Plus>
        <Input defaultValue="1" maxLength={2} min="1" max="99" />
        <Minus>-</Minus>
      </Wrapper>
    </Container>
  );
};

const baseBtn = css`
  width: 28px;
  height: 28px;
  font-size: 1.3rem;
  /* font-weight: 600; */
  line-height: 25px;
  border-radius: 50%;
  background: #e3e2e27b;
  cursor: pointer;
`;

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  /* background: ${cl.lightGray}; */
  border-radius: 12px;
  /* padding: 8px; */
  padding: 10px 8px 10px 5px;
  width: 7rem;
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
