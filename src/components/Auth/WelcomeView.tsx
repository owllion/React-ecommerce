import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGoogleLogin } from "@react-oauth/google";
import { AnyAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";

import cl from "../../constants/color/color";
import { authImgList } from "../../assets/authImg";
import { Btn, BtnText } from "./auth.style";
import { useAppDispatch } from "../../store/hooks";
import { googleLogin } from "src/store/actions/auth/googleLogin.action";
import AuthFormTemplate from "./AuthFormTemplate";

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
    <AuthFormTemplate
      mainTitle="Welcome!"
      subTitle="Sign Up or Sign In"
      imgUrl={authImgList.welcome}
      alt="welcomeImg"
    >
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
    </AuthFormTemplate>
  );
};

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
