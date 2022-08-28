import styled from "styled-components";
import { AxiosError } from "axios";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import PwdInput from "../Common/input/PwdInput";
import ResetImg from "src/assets/login/reset-pwd.png";
import { resetPassword } from "../../api/user.api";
import AuthFormTemplate from "./AuthFormTemplate";
import AuthBtn from "./AuthBtn";
import PwdRule from "./pwdRule/PwdRule";

interface FormValue {
  password: string;
}

const ResetPassword = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { token } = params as { token: string };
  const methods = useForm<FormValue>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    try {
      await resetPassword({ token, ...data });
      toast.success("Password reset successfully!");
      navigate("/auth/welcome");
    } catch (error) {
      const err = error as AxiosError;
      if (err.response && err.response.data)
        toast.error((err.response?.data as { msg: string }).msg);
    }
  };
  console.log(errors);

  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <AuthFormTemplate
          mainTitle="Reset your password"
          subTitle="Don't forget again"
          imgUrl={ResetImg}
          alt="resetImg"
        >
          <PwdInput
            label="New Password"
            errors={errors}
            field="password"
            validation={["required", "passwordValidation"]}
          />
          <PwdRule />
          <AuthBtn btnText="Submit" />
        </AuthFormTemplate>
      </FormContainer>
    </FormProvider>
  );
};

const FormContainer = styled.form``;

export default ResetPassword;
