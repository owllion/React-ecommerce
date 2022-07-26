import React from "react";
import styled, { keyframes } from "styled-components";

const CheckBox = ({ item, current, handle }) => {
  return (
    <Container>
      <CheckBoxItem
        type={current !== "Price" ? "checkbox" : "radio"}
        name={current !== "Price" ? item : "singleAns"}
        value={item}
        id={item}
        onChange={handle}
      />
      <Label for={item}>{item}</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const pop = keyframes`
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.9);
  }
  66% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
const CheckBoxItem = styled.input`
  appearance: none;
  transition: all 0.3s;
  outline: none;
  font-size: 1.5rem;
  font-family: "Font Awesome 5 Free";
  cursor: pointer;
  &::after {
    content: "\f111";
    display: inline-block;
    text-align: center;
    width: 1em;
  }
  &:checked::after {
    font-weight: 900;
    content: "\f058";
    animation: ${pop} 0.3s 1;
  }
`;
const Label = styled.label`
  padding: 0.5rem 0 0 1.5rem;
  cursor: pointer;
`;
export default CheckBox;
