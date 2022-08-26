import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import BackBtn from "../Common/button/BackBtn";
import cl from "../../constants/color/color.js";
import {
  MainTitle,
  SubTitle,
  Btn,
  BtnText,
  TopImgContainer,
  TopImg,
} from "./Common.style";
import ForgotPwd from "../../assets/login/forgot-pwd.png";
import { Label, Input } from "./Registration";
import FieldErr from "../error/FieldErr";
import { getValidationData } from "../Checkout/form/shipping-form/getValidationData";
import { forgotPassword } from "src/api/user.api";

interface FormValue {
  email: string;
}
const ForgotPassword = () => {
  const navigate = useNavigate();
  const methods = useForm<FormValue>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    try {
      await forgotPassword({ ...data });
      navigate("/auth/reset-password/notification", {
        state: { email: data.email, type: "reset password" },
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(errors);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <TopImgContainer>
        <TopImg src={ForgotPwd} />
      </TopImgContainer>
      <MainTitle>Forgot your password?</MainTitle>
      <BreakSubTitle>
        <span>Please enter your email address.</span>
        <span>We will send you an email to reset your password.</span>
      </BreakSubTitle>
      <InputBox>
        <Label>Email</Label>
        <Input
          error={errors.email}
          {...register("email", getValidationData(["required", "email"]))}
        />
        <FieldErr errors={errors} field="email" />
      </InputBox>
      <BtnBox>
        <Btn bgColor={`${cl.dark}`}>
          <BtnText color={`${cl.white}`}>Send me reset Link</BtnText>
        </Btn>
      </BtnBox>
      <BackToLoginLink to={"/auth/welcome"}>Back to Login</BackToLoginLink>
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

// const Input = styled.input`
//   ${baseInput}
// `;
// const Label = styled.label`
//   ${baseLabel}
// `;
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
