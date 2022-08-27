import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

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
      <AuthFormTemplate
        mainTitle="What's your email?"
        subTitle=" We are going to check if you already have an account"
        imgUrl={EmailImg}
      >
        <InputBox>
          <Label>Email</Label>
          <Input
            error={errors.email}
            {...register("email", getValidationData(["required", "email"]))}
          />
          <FieldErr errors={errors} field="email" />
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
