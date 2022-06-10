import React from "react";

import styled from "styled-components";
import cl from "../constants/color/color";
import { IoIosSend } from "react-icons/io";

const Newsletter = () => {
  return (
    <Container>
      <DescContainer>
        <Title>Newsletter</Title>
        <Desc>Get e-mail updates about our latest shop and special offers</Desc>
      </DescContainer>
      <InputContainer>
        <Input placeholder="Your email" />
        <SendBtn>
          <IoIosSend />
        </SendBtn>
      </InputContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 20vh;
  padding: 0.3rem 3rem;
  margin-top: 5rem;
  background-color: ${cl.mainGray};

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 50vh;
    text-align: center;
  }
  @media (max-width: 450px) {
    padding: 0 2rem;
  }
`;
const DescContainer = styled.div``;
const Title = styled.h1`
  font-size: 1.7rem; ;
`;
const Desc = styled.div`
  font-size: 1.2rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;
const InputContainer = styled.div`
  width: 30%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  display: flex;
  border-radius: 0 5px 5px 0;
  @media (max-width: 820px) {
    width: 80%;
  }
  @media (max-width: 375px) {
    width: auto;
  }
`;
const Input = styled.input`
  border: none;
  flex: 8;
  border-radius: 4px;
  width: 100%;
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
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
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
