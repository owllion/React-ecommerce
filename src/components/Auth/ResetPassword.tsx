import { useState } from "react";
import styled from "styled-components";
import { AxiosError } from "axios";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import cl from "src/constants/color/color.js";
import {
  MainTitle,
  SubTitle,
  Btn,
  BtnText,
  TopImgContainer,
  TopImg,
} from "./Common.style";
import PwdInput from "../Common/input/PwdInput";
import ResetImg from "src/assets/login/reset-pwd.png";
import { resetPassword } from "../../api/user.api";

interface FormValue {
  password: string;
}

const ResetPassword = () => {
  const [showRules, setShowRules] = useState(false);
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
  const handleSetShowRules = () => {
    setShowRules(!showRules);
  };
  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <TopImgContainer>
          <TopImg src={ResetImg} />
        </TopImgContainer>
        <MainTitle>Reset your password</MainTitle>
        <SubTitle>Don't forget again</SubTitle>
        <PwdInput
          label="New Password"
          errors={errors}
          field="password"
          validation={["required", "passwordValidation"]}
        />
        <ShowPwdRulesBtn onClick={() => handleSetShowRules()}>
          <AiOutlineQuestionCircle /> <span>Rules</span>
        </ShowPwdRulesBtn>
        {showRules && (
          <PwdRules>
            <p> ➊ must be eight characters or longer</p>
            <p> ➋ must contain at least 1 number</p>
            <p> ➌ must contain at least 1 special character</p>
            <p>
              ➍ must contain at least 1 uppercase and lowercase alphabetical
              character
            </p>
          </PwdRules>
        )}
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
const BtnBox = styled.div`
  margin-top: 1.3rem;
`;
const ShowPwdRulesBtn = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
export const PwdRules = styled.div`
  margin-top: 1rem;
  color: ${cl.textLightGray};
`;
export default ResetPassword;
