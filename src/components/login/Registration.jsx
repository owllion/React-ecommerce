import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import cl from "../../constants/color/color.js";
import { MainTitle, SubTitle, Btn, BtnText } from "./Common.style";
import FieldErr from "../error/FieldErr.jsx";
import PwdInput from "../input/PwdInput";
import {
  RowFlexBox,
  LeftInputBox,
  RightInputBox,
} from "../shipping-form/ShippingForm";
import { getValidationData } from "../shipping-form/getValidationData.js";
import { baseInput, baseLabel } from "../ReviewForm";
import RegistrationImg from "../../assets/login/signup.png";

const Registration = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <IconContainer>
          <Icon src={RegistrationImg} alt="registration" />
        </IconContainer>
        <MainTitle>Let's get it started!</MainTitle>
        <SubTitle>Create your account</SubTitle>
        <InputBox>
          <Label>Email</Label>
          <Input value="test@gmail.com" />
        </InputBox>
        <RowFlexBox>
          <RegistrationLeftInputBox>
            <Label error={errors.firstName}>First Name</Label>
            <Input
              error={errors.firstName}
              {...register(
                "firstName",
                getValidationData(["required", "maxLength", "alphabetical"])
              )}
            />
            <FieldErr errors={errors} field="firstName" />
          </RegistrationLeftInputBox>

          <RightInputBox>
            <Label error={errors.lastName}>Last Name</Label>
            <Input
              error={errors.lastName}
              {...register(
                "lastName",
                getValidationData(["required", "alphabetical"])
              )}
            />
            <FieldErr errors={errors} field="lastName" />
          </RightInputBox>
        </RowFlexBox>

        <PwdInput
          label="Password"
          errors={errors}
          field="loginPwd"
          validation={["required"]}
        />
        <BtnBox>
          <Btn bgColor={`${cl.dark}`}>
            <BtnText color={`${cl.white}`}>Sign Up</BtnText>
          </Btn>
        </BtnBox>
      </FormContainer>
    </FormProvider>
  );
};
const FormContainer = styled.form``;
const IconContainer = styled.div`
  margin-bottom: 0.8rem;
  width: 130px;
`;
const Icon = styled.img`
  width: 100%;
`;
const BtnBox = styled.div`
  margin-top: 1.3rem;
`;
const RegistrationLeftInputBox = styled(LeftInputBox)`
  margin-right: 1rem;
`;

const Input = styled.input`
  ${baseInput}
  border-color: ${({ error }) => (error ? `${cl.red}` : `${cl.gray}`)};
`;
const Label = styled.label`
  ${baseLabel}
  color: ${({ error }) => error && `${cl.red}`};
`;
const InputBox = styled.div`
  margin: 0 0 1rem;
`;
export default Registration;
