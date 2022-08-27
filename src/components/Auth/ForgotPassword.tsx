import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import cl from "../../constants/color/color.js";
import ForgotPwd from "../../assets/login/forgot-pwd.png";
import { Label, Input } from "./Registration";
import { getValidationData } from "../Checkout/form/shipping-form/getValidationData";
import AuthFormTemplate from "./AuthFormTemplate";
import AuthBtn from "./AuthBtn";
import FieldErr from "../error/FieldErr";
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
      <AuthFormTemplate
        mainTitle="Forgot your password?"
        subTitle="We will send you an email to reset your password."
        imgUrl={ForgotPwd}
        alt="forgotPwdImg"
      >
        <InputBox>
          <Label>Email</Label>
          <Input
            error={errors.email}
            {...register("email", getValidationData(["required", "email"]))}
          />
          <FieldErr errors={errors} field="email" />
        </InputBox>

        <AuthBtn
          btnText="Send me reset Link"
          bgColor="dark"
          textColor="white"
        />
      </AuthFormTemplate>
    </FormContainer>
  );
};

const FormContainer = styled.form``;
const InputBox = styled.div`
  margin: 0 0 1rem;
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
