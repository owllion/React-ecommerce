import React from "react";

import styled from "styled-components";
import cl from "../constants/color/color";
import { IoIosSend } from "react-icons/io";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <SendBtn>
          <IoIosSend />
        </SendBtn>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 60vh;
  margin-top: 5rem;
  background-color: #dfd3b4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 450px) {
    padding: 0 2rem;
  }
`;
const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 20px;
  @media (max-width: 450px) {
    font-size: 2.5rem;
  }
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;
const InputContainer = styled.div`
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 0 5px 5px 0;
`;
const Input = styled.input`
  border: none;
  padding-left: 1.2rem;
  &:focus {
    outline: none;
  }
`;
const SendBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0 5px 5px 0;
  transition: all 0.5s ease-in;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${cl.white};
    color: ${cl.green};
  }
`;
export default Newsletter;
