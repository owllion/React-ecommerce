import styled from "styled-components";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { AxiosError } from "axios";

import SectionTitle from "./SectionTitle";
import SaveBtn from "./SaveBtn";
import PwdSvg from "../../assets/reset-password/pwd.svg";
import PwdInput from "../Common/input/PwdInput";
import { userPasswordModify } from "src/api/user.api";
import toast from "react-hot-toast";
import PwdRule from "../Auth/pwdRule/PwdRule";
interface FormValue {
  curPwd: string;
  newPwd: string;
}

const AccountResetPwd = () => {
  const passwordModify = async (password: string) => {
    try {
      await userPasswordModify({ password });
      toast.success("modify successfully,you can use new password to login");
    } catch (error) {
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
  const methods = useForm<FormValue>();
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    await passwordModify(data.newPwd);
    reset({
      curPwd: "",
      newPwd: "",
    });
  };
  console.log(errors);

  return (
    <Container>
      <SectionTitle title="Password" />
      <Wrapper>
        <InputContainer>
          <FormProvider {...methods}>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
              <PwdInput
                label="Current Password"
                errors={errors}
                field="curPwd"
                validation={["required"]}
              />
              <PwdInput
                label="New Password"
                errors={errors}
                field="newPwd"
                validation={["required", "passwordValidation"]}
              />
              <PwdRule />
              <SaveBtn />
            </FormWrapper>
          </FormProvider>
        </InputContainer>
        <ImageContainer>
          <Img src={PwdSvg} alt="ResetPwd" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
`;
const InputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormWrapper = styled.form`
  width: 80%;
  padding: 2rem 0;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;

export default AccountResetPwd;
