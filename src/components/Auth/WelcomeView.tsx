import React from "react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import styled from "styled-components";

import cl from "../../constants/color/color";
import { MainTitle, SubTitle, Btn, BtnText } from "./Common.style";

const WelcomeView = () => {
  const handleFailure = (res: any) => {
    alert(res);
  };
  const handleLogin = (googleData: any) => {
    console.log(googleData);
  };
  return (
    <Container>
      <MainTitle>Welcome!</MainTitle>
      <SubTitle>Sign Up or Sign In</SubTitle>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
        render={(renderProps) => (
          <LoginBtnBox needPadding onClick={() => alert("fjfjf")}>
            <Btn shadow>
              <BtnText color={`${cl.textLightGray}`}>Login with Google</BtnText>
            </Btn>
          </LoginBtnBox>
        )}
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
      />
      {/* onSuccess={responseGoogle}
        onFailure={responseGoogle} */}

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
