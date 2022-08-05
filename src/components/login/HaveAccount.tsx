import React from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import cl from "../../constants/color/color.js";
import { MainTitle, SubTitle, Btn, BtnText } from "../Login/Common.style";
import PwdInput from "../Common/input/PwdInput";
import LoginImg from "../../assets/login/login-with-pwd.png";
import FieldErr from "../error/FieldErr";

interface FormValue {
  email: string;
  password: string;
}

const HaveAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailParam = (location.state as Pick<FormValue, "email">)?.email;

  const methods = useForm<FormValue>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    try {
    } catch (error) {}
  };
  console.log(errors);

  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <IconContainer>
          <Icon src={LoginImg} />
        </IconContainer>
        <MainTitle>Welcome Back!</MainTitle>
        <SubTitle>Have your money ready.</SubTitle>

        <UserEmailBox>
          <UserEmail>{emailParam}</UserEmail>
          <ForgotPasswordLink to={"/login/forgot-password"}>
            Forgot Password?
          </ForgotPasswordLink>
        </UserEmailBox>

        <PwdInput
          label="Password"
          errors={errors}
          field="password"
          validation={["required"]}
        />
        <FieldErr errors={errors} field="password" />
        <BtnBox>
          <Btn bgColor={`${cl.dark}`}>
            <BtnText color={`${cl.white}`}>Login</BtnText>
          </Btn>
        </BtnBox>
      </FormContainer>
    </FormProvider>
  );
};

const FormContainer = styled.form``;
const IconContainer = styled.div`
  margin-bottom: 0.5rem;
`;
const Icon = styled.img``;
const BtnBox = styled.div`
  margin-top: 1.3rem;
`;
const UserEmailBox = styled.div`
  margin-bottom: 1.5rem;
`;
const UserEmail = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;
const ForgotPasswordLink = styled(Link)`
  color: ${cl.blue};
  font-size: 0.8rem;
  transition: color 0.3s ease;
  &:hover {
    color: #006aff;
  }
`;

export default HaveAccount;
