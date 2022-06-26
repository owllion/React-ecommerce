import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import FieldErr from "../error/FieldErr.jsx";

import { Container, LoginContainer } from "../../pages/Login.jsx";
import PwdInput from "../input/PwdInput";
import cl from "../../constants/color/color.js";
import { MainTitle, SubTitle, Btn, BtnText } from "./Common.style";
import { baseInput, baseLabel } from "../ReviewForm";
import EmailImg from "../../assets/login/at-sign.png";

const ResetPassword = () => {
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Container>
      <LoginContainer>
        <FormProvider {...methods}>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <IconContainer>
              <Icon src={EmailImg} />
            </IconContainer>
            <MainTitle>Reset your password</MainTitle>
            <SubTitle>Don't forget again</SubTitle>
            <PwdInput
              label="New Password"
              errors={errors}
              field="newPwd"
              validation={["required", "passwordValidation"]}
            />
            <FieldErr />
            <BtnBox>
              <Btn bgColor={`${cl.dark}`}>
                <BtnText color={`${cl.white}`}>Submit</BtnText>
              </Btn>
            </BtnBox>
          </FormContainer>
        </FormProvider>
      </LoginContainer>
    </Container>
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
export default ResetPassword;
