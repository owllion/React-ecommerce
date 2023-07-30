import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldError,
} from "react-hook-form";
import { AnyAction } from "@reduxjs/toolkit";

import cl from "src/constants/color/color.js";
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
import { useAppDispatch } from "../../store/hooks";
import signInOrSignUp from "../../store/actions/auth/signInOrSignUp.action";
import AuthFormTemplate from "./AuthFormTemplate";
import AuthBtn from "./AuthBtn";
import PwdRule from "./pwdRule/PwdRule";
import { authImgList } from "../../assets/authImg";

export interface FormValue {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const Registration = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const emailParam = (location.state as Pick<FormValue, "email">)?.email;

  const methods = useForm<FormValue>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    try {
      await dispatch(
        signInOrSignUp({
          ...data,
          email: emailParam,
        }) as unknown as AnyAction
      );
      navigate("/auth/verify-email/notification", {
        state: { email: emailParam, type: "verify email" },
        replace: true,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(errors);

  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <AuthFormTemplate
          mainTitle="Let's get it started!"
          subTitle="Create your account"
          imgUrl={authImgList.sign_up}
          alt="registration"
        >
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
                  getValidationData(["required", "maxLength"])
                )}
              />
              <FieldErr errors={errors} field="firstName" />
            </RegistrationLeftInputBox>

            <RightInputBox>
              <Label error={errors.lastName}>Last Name</Label>
              <Input
                error={errors.lastName}
                {...register("lastName", getValidationData(["required"]))}
              />
              <FieldErr errors={errors} field="lastName" />
            </RightInputBox>
          </RowFlexBox>

          <PwdInput
            label="Password"
            errors={errors}
            field="password"
            validation={["required", "passwordValidation"]}
          />
          <PwdRule />
          <AuthBtn btnText="Sign Up" needSwitchText={true} />
        </AuthFormTemplate>
      </FormContainer>
    </FormProvider>
  );
};
const FormContainer = styled.form``;
const RegistrationLeftInputBox = styled(LeftInputBox)`
  margin-right: 1rem;
`;
export const Input = styled.input<{ error?: FieldError }>`
  ${baseInput}
  border-color: ${({ error }) => (error ? `${cl.red}` : `${cl.gray}`)};
`;
export const Label = styled.label<{ error?: FieldError }>`
  ${baseLabel}
  color: ${({ error }) => error && `${cl.red}`};
`;
const InputBox = styled.div`
  margin: 0 0 1rem;
`;
export default Registration;
