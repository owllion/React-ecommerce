import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGoogleLogin } from "@react-oauth/google";
import { AnyAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

import cl from "../../constants/color/color";
import { MainTitle, SubTitle, Btn, BtnText } from "./Common.style";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../store/hooks";
import { googleLogin } from "src/store/actions/auth/googleLogin.action";

const WelcomeView = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const googleLoginHandler = async (code: string) => {
    try {
      await dispatch(googleLogin(code) as unknown as AnyAction);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse: Record<string, string>) => {
      await googleLoginHandler(codeResponse.code);
    },
  });

  return (
    <Container>
      <MainTitle>Welcome!</MainTitle>
      <SubTitle>Sign Up or Sign In</SubTitle>
      <LoginBtnBox needPadding onClick={() => login()}>
        <Btn shadow>
          <BtnText color={`${cl.textLightGray}`}>Login with Google</BtnText>
        </Btn>
      </LoginBtnBox>

      <LoginBtnBox>
        <Btn bgColor={"#61ee3d"}>
          <BtnText color={`${cl.white}`}>Login with LINE</BtnText>
        </Btn>
      </LoginBtnBox>
      <Divider>OR</Divider>
      <LoginBtnBox>
        <Link to={"/auth/check-email"}>
          <Btn border>
            <BtnText>Login with Email</BtnText>
          </Btn>
        </Link>
      </LoginBtnBox>
    </Container>
  );
};

const Container = styled.div``;

const LoginBtnBox = styled.div<{ needPadding?: boolean }>`
  padding-bottom: ${({ needPadding }) => (needPadding ? "1.3rem" : 0)};
`;
const Divider = styled.p`
  text-align: center;
  color: #707070;
  margin: 1rem 0;
`;

export default WelcomeView;
