import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import cl from "../../constants/color/color.js";
import { MainTitle, SubTitle, Btn, BtnText } from "./Common.style";
import { baseInput, baseLabel } from "../ReviewForm";
import EmailImg from "../../assets/login/at-sign.png";

const CheckEmail = () => {
  return (
    <FormContainer>
      <IconContainer>
        <Icon src={EmailImg} />
      </IconContainer>
      <MainTitle>What's your email?</MainTitle>
      <SubTitle>We are going to check if you already have an account</SubTitle>
      <InputBox>
        <Label>Email</Label>
        <Input />
      </InputBox>
      <BtnBox>
        <Link to={"/login/send-link-notification"}>
          <Btn bgColor={`${cl.dark}`}>
            <BtnText color={`${cl.white}`}>Continue</BtnText>
          </Btn>
        </Link>
      </BtnBox>
    </FormContainer>
  );
};

const FormContainer = styled.form``;
const IconContainer = styled.div`
  margin-bottom: 0.5rem;
`;
const Icon = styled.img``;
const InputBox = styled.div`
  margin: 0 0 1rem;
`;
const Input = styled.input`
  ${baseInput}
`;
const Label = styled.label`
  ${baseLabel}
`;
const BtnBox = styled.div`
  margin-top: 1.3rem;
`;
export default CheckEmail;
