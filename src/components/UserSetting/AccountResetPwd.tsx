import styled from "styled-components";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import SectionTitle from "./SectionTitle";
import SaveBtn from "./SaveBtn";
import PwdSvg from "../../assets/reset-password/pwd.svg";
import PwdInput from "../Common/input/PwdInput";

interface FormValue {
  curPwd: string;
  newPwd: string;
}

const AccountResetPwd = () => {
  const methods = useForm<FormValue>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error, "this is catch error");
    }
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
