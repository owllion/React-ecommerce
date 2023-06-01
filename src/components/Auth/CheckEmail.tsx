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
import { InputBox } from "../Auth/auth.style";
import { authImgList } from "../../assets/authImg";

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
        data: { has_account },
      } = await checkIfAccountExists(email);

      has_account
        ? navigate("/auth/user-login", {
            state: { email: email.email },
            replace: true,
          })
        : navigate("/auth/registration", {
            state: { email: email.email },
            replace: true,
          });
    } catch (error) {
      if (error && error instanceof AxiosError) {
        const err = ((error as AxiosError).response?.data as { msg: string })
          .msg;
        return dispatch(commonActions.setError(err));
      }
      dispatch(commonActions.setError("something wrong"));
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
        imgUrl={authImgList.at_sign}
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

        <AuthBtn btnText="Continue" />
      </AuthFormTemplate>
    </FormContainer>
  );
};

const FormContainer = styled.form``;
export default CheckEmail;
