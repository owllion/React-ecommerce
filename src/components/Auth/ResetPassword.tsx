import styled from "styled-components";
import { AxiosError } from "axios";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import cl from "src/constants/color/color.js";
import { MainTitle, SubTitle, Btn, BtnText } from "./Common.style";
import PwdInput from "../Common/input/PwdInput";
import EmailImg from "src/assets/login/at-sign.png";
import { resetPassword } from "../../api/user.api";
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
        <IconContainer>
          <Icon src={EmailImg} />
        </IconContainer>
        <MainTitle>Reset your password</MainTitle>
        <SubTitle>Don't forget again</SubTitle>
        <PwdInput
          label="New Password"
          errors={errors}
          field="password"
          validation={["required", "passwordValidation"]}
        />
        <BtnBox>
          <Btn bgColor={`${cl.dark}`}>
            <BtnText color={`${cl.white}`}>Submit</BtnText>
          </Btn>
        </BtnBox>
      </FormContainer>
    </FormProvider>
  );
};

const FormContainer = styled.form``;
const IconContainer = styled.div`
  margin-bottom: 0.5rem;
`;
const Icon = styled.img``;
const BtnBox = styled.div`
  margin-top: 1.3rem;
`;
export default ResetPassword;
