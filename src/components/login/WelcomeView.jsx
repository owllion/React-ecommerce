import React from "react";
import styled, { css } from "styled-components";
import cl from "../../constants/color/color";
import { MainTitle, SubTitle } from "./Title.style";
const WelcomeView = () => {
  return (
    <Container>
      <MainTitle>Welcome!</MainTitle>
      <SubTitle>Sign Up or Sign In</SubTitle>
      <LoginBtnBox needPadding>
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
        <Btn border>
          <BtnText>Login with Email</BtnText>
        </Btn>
      </LoginBtnBox>
    </Container>
  );
};

const Container = styled.div``;

const LoginBtnBox = styled.div`
  padding-bottom: ${({ needPadding }) => (needPadding ? "1.3rem" : 0)};
`;
const BtnText = styled.span`
  color: ${({ color }) => color};
  font-size: 0.8rem;
`;
const Btn = styled.button`
  width: 100%;
  z-index: 1;
  cursor: pointer;
  position: relative;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  height: 48px;
  border: 1px solid;
  border-radius: 8px;
  padding: 0 15px;
  line-height: 46px;
  vertical-align: middle;
  touch-action: manipulation;
  user-select: none;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  background: ${({ bgColor }) => bgColor};
  border: ${({ border }) => (border ? `1px solid ${cl.dark}` : "none")};
  box-shadow: ${({ shadow }) =>
    shadow
      ? "0 0 2px 0 rgb(0 0 0 / 12%), 0 2px 2px 0 rgb(0 0 0 / 24%)"
      : "none"};
`;
const Divider = styled.p`
  text-align: center;
  color: #707070;
  margin: 1rem 0;
`;

export default WelcomeView;
