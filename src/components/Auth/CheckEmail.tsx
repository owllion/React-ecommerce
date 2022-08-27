import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch } from "../../store/hooks";
import { commonActions } from "../../store/slice/Common.slice";
import EmailImg from "../../assets/login/at-sign.png";
import { checkIfAccountExists } from "../../api/auth.api";
import AuthFormTemplate from "./AuthFormTemplate";
import { getValidationData } from "../Checkout/form/shipping-form/getValidationData";
import FieldErr from "../error/FieldErr";
import AuthBtn from "./AuthBtn";
import {
  Label,
  Input,
} from "../Checkout/form/shipping-form/ShippingForm.style";
import ApiError from "../error/ApiError";
import { AxiosError } from "axios";

interface FormValue {
  email: string;
}
const CheckEmail = () => {
  const dispatch = useAppDispatch();
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
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;

      dispatch(commonActions.setError(err));
    }
  };
  console.log(errors);

  useEffect(() => {
    dispatch(commonActions.setErrorClear());
  }, []);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <AuthFormTemplate
        mainTitle="What's your email?"
        subTitle=" We are going to check if you already have an account"
        imgUrl={EmailImg}
        alt="checkEmailImg"
      >
        <InputBox>
          <Label>Email</Label>
          <Input
            error={errors.email}
            {...register("email", getValidationData(["required", "email"]))}
          />
          <FieldErr errors={errors} field="email" />
          <ApiError />
        </InputBox>

        <AuthBtn btnText="Continue" bgColor="dark" textColor="white" />
      </AuthFormTemplate>
    </FormContainer>
  );
};

const FormContainer = styled.form``;
const InputBox = styled.div`
  margin: 0 0 1rem;
`;
export default CheckEmail;
