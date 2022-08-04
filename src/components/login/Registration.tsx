import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldError,
} from "react-hook-form";

import cl from "src/constants/color/color.js";
import { MainTitle, SubTitle, Btn, BtnText } from "../Login/Common.style";
import FieldErr from "../error/FieldErr";
import PwdInput from "../Common/input/PwdInput";
import {
  RowFlexBox,
  LeftInputBox,
  RightInputBox,
} from "../Checkout/form/shipping-form/ShippingForm.style";
import { getValidationData } from "../Checkout/form/shipping-form/getValidationData";
import { baseInput, baseLabel } from "../Product/Review/ReviewForm";
import RegistrationImg from "../../assets/login/signup.png";
import { registerApi } from "src/api/auth.api";
import { useAppDispatch } from "../../store/hooks";
import { cartActions } from "../../store/slice/Cart.slice";
import { userActions } from "../../store/slice/User.slice";
import { IUser } from "../../interface/user.interface";
import { authActions } from "../../store/slice/Auth.slice";

interface FormValue {
  email: string;
  firstName: string;
  lastName: string;
  registerPwd: string;
}
interface IUserInfo extends IUser {
  cartLength: number;
}
interface IRegisterVal {
  token: string;
  refreshToken: string;
  result: IUserInfo;
}
const Registration = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const emailParam = (location.state as Pick<FormValue, "email">)?.email;

  const methods = useForm<FormValue>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    try {
      const {
        data: {
          token,
          refreshToken,
          result: {
            cartLength,
            avatarUpload,
            avatarDefault,
            email,
            firstName,
            lastName,
          },
        },
      }: {
        data: IRegisterVal;
      } = await registerApi({
        email: emailParam,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.registerPwd,
      });
      dispatch(authActions.setToken(token));
      dispatch(authActions.setRefreshToken(refreshToken));
      dispatch(cartActions.setCartLength(cartLength));
      dispatch(
        userActions.setUserInfo({
          firstName,
          lastName,
          email,
          avatarUpload,
          avatarDefault,
        } as IUser)
      );
    } catch (error) {
      console.log(error);
    }
  };
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
          <Input value={emailParam} />
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
          field="registerPwd"
          validation={["required", "passwordValidation"]}
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

const Input = styled.input<{ error?: FieldError }>`
  ${baseInput}
  border-color: ${({ error }) => (error ? `${cl.red}` : `${cl.gray}`)};
`;
const Label = styled.label<{ error?: FieldError }>`
  ${baseLabel}
  color: ${({ error }) => error && `${cl.red}`};
`;
const InputBox = styled.div`
  margin: 0 0 1rem;
`;
export default Registration;
