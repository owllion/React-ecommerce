import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BackBtn from "../button/BackBtn";
import cl from "../../constants/color/color.js";
import { MainTitle, SubTitle, Btn, BtnText } from "./Common.style";
import { baseInput, baseLabel } from "../ReviewForm";
import ForgotPwd from "../../assets/login/forgot-pwd.png";

const ForgotPassword = () => {
  return (
    <FormContainer>
      <IconContainer>
        <Icon src={ForgotPwd} />
      </IconContainer>
      <MainTitle>Forgot your password?</MainTitle>
      <BreakSubTitle>
        <span>Please enter your email address.</span>
        <span>We will send you an email to reset your password.</span>
      </BreakSubTitle>
      <InputBox>
        <Label>Email</Label>
        <Input />
      </InputBox>
      <BtnBox>
        <Btn bgColor={`${cl.dark}`}>
          <BtnText color={`${cl.white}`}>Reset Password</BtnText>
        </Btn>
      </BtnBox>
      <BackToLoginLink to={"/login/welcome"}>Back to Login</BackToLoginLink>
    </FormContainer>
  );
};

const FormContainer = styled.form``;
const IconContainer = styled.div`
  margin-bottom: 0.5rem;
`;
const BreakSubTitle = styled(SubTitle)`
  span {
    display: block;
  }
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
const BackToLoginLink = styled(Link)`
  display: block;
  margin-top: 16px;
  color: ${cl.blue};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`;
export default ForgotPassword;
