import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGoogleLogin } from "@react-oauth/google";
import { AnyAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";

import cl from "../../constants/color/color";
import WelcomeImg from "src/assets/login/welcome.png";
import {
  MainTitle,
  SubTitle,
  Btn,
  BtnText,
  TopImgContainer,
  TopImg,
} from "./Common.style";
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
      <TopImgContainer>
        <TopImg src={WelcomeImg} />
      </TopImgContainer>
      <MainTitle>Welcome!</MainTitle>
      <SubTitle>Sign Up or Sign In</SubTitle>
      <LoginBtnBox onClick={() => login()}>
        <LoginBtn shadow>
          <FcGoogle />
          <BtnText color={`${cl.textLightGray}`}>Login with Google</BtnText>
        </LoginBtn>
      </LoginBtnBox>
      <Divider>OR</Divider>
      <LoginBtnBox>
        <Link to={"/auth/check-email"}>
          <LoginBtn bgColor="black">
            <IoMdMail />
            <BtnText>Login with Email</BtnText>
          </LoginBtn>
        </Link>
      </LoginBtnBox>
    </Container>
  );
};

const Container = styled.div``;
const LoginBtnBox = styled.div``;
const LoginBtn = styled(Btn)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.4rem;
`;
const Divider = styled.p`
  text-align: center;
  color: #707070;
  margin: 1rem 0;
`;

export default WelcomeView;
