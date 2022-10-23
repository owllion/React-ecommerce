import { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { AnyAction } from "@reduxjs/toolkit";

import { useAppDispatch } from "../../store/hooks";
import cl from "../../constants/color/color.js";
import PwdInput from "../Common/input/PwdInput";
import LoginImg from "../../assets/login/login-with-pwd.png";
import ApiError from "../error/ApiError";
import signInOrSignUp from "src/store/actions/auth/signInOrSignUp.action";
import { commonActions } from "../../store/slice/Common.slice";
import AuthFormTemplate from "./AuthFormTemplate";
import AuthBtn from "./AuthBtn";
import { authImgList } from "../../assets/authImg";

interface FormValue {
  email: string;
  password: string;
}

const HaveAccount = () => {
  const dispatch = useAppDispatch();
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
      await dispatch(
        signInOrSignUp({
          ...data,
          email: emailParam,
        }) as unknown as AnyAction
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(errors);

  useEffect(() => {
    dispatch(commonActions.setErrorClear());
  }, []);

  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <AuthFormTemplate
          mainTitle="Welcome Back!"
          subTitle="Have your money ready."
          imgUrl={authImgList.login_with_pwd}
          alt="loginImg"
        >
          <UserEmailBox>
            <UserEmail>{emailParam}</UserEmail>
            <ForgotPasswordLink to={"/auth/forgot-password"}>
              Forgot Password?
            </ForgotPasswordLink>
          </UserEmailBox>

          <PwdInput
            label="Password"
            errors={errors}
            field="password"
            validation={["required"]}
          />
          <ApiError />
          <AuthBtn btnText="Login" />
        </AuthFormTemplate>
      </FormContainer>
    </FormProvider>
  );
};

const FormContainer = styled.form``;

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
