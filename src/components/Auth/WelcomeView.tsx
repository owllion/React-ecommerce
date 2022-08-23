import React from "react";
import { GoogleLogin } from "react-google-login";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGoogleLogin } from "@react-oauth/google";

import cl from "../../constants/color/color";
import { MainTitle, SubTitle, Btn, BtnText } from "./Common.style";
import toast from "react-hot-toast";

const WelcomeView = () => {
  const googleLogin = async (code: string) => {
    try {
    } catch (error) {
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse: Record<string, string>) => {
      try {
      } catch (error) {
        const err = ((error as AxiosError).response?.data as { msg: string })
          .msg;
        toast.error(err);
      }
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
