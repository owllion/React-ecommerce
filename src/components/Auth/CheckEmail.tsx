import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";

import cl from "../../constants/color/color.js";
import {
  MainTitle,
  SubTitle,
  Btn,
  BtnText,
  TopImgContainer,
  TopImg,
} from "./auth.style";
import { baseInput, baseLabel } from "../Product/Review/ReviewForm";
import EmailImg from "../../assets/login/at-sign.png";
import FieldErr from "../error/FieldErr";
import { getValidationData } from "../Checkout/form/shipping-form/getValidationData";
import { checkIfAccountExists } from "../../api/auth.api";

interface FormValue {
  email: string;
}
const CheckEmail = () => {
  const navigate = useNavigate();
  const methods = useForm<FormValue>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<FormValue> = async (email) => {
    try {
      const {
        data: { hasAccount },
      } = await checkIfAccountExists(email);

      hasAccount
        ? navigate("/auth/user-login", { state: { email: email.email } })
        : navigate("/auth/registration", { state: { email: email.email } });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(errors);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <TopImgContainer>
        <TopImg src={EmailImg} />
      </TopImgContainer>
      <MainTitle>What's your email?</MainTitle>
      <SubTitle>We are going to check if you already have an account</SubTitle>
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
          <BtnText color={`${cl.white}`}>Continue</BtnText>
        </Btn>
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
const Input = styled.input<{ error?: FieldError }>`
  ${baseInput}
  border-color: ${({ error }) => (error ? `${cl.red}` : `${cl.gray}`)};
`;
const Label = styled.label<{ error?: FieldError }>`
  ${baseLabel}
  color: ${({ error }) => error && `${cl.red}`};
`;
const BtnBox = styled.div`
  margin-top: 1.3rem;
`;
export default CheckEmail;
