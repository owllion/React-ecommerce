import React from "react";
import styled, { css } from "styled-components";
import cl from "../../constants/color/color";

const WelcomeView = () => {
  return (
    <Container>
      <WelcomeText>Welcome!</WelcomeText>
      <SubText>Sign Up or Sign In</SubText>
      <LoginBtnBox>
        <GoogleBtn>
          <BtnText>Google</BtnText>
        </GoogleBtn>
      </LoginBtnBox>
      <LoginBtnBox isLast={true}>
        <LineBtn>
          <BtnText>LINE</BtnText>
        </LineBtn>
      </LoginBtnBox>
      <Divider>OR</Divider>
    </Container>
  );
};

const Container = styled.div``;
const WelcomeText = styled.h2``;
const SubText = styled.p`
  margin: 0;
  color: ${cl.textLightGray};
  font-size: 0.8rem;
  margin-bottom: 2rem;
`;
const LoginBtnBox = styled.div`
  padding-bottom: ${({ isLast }) => (isLast ? 0 : "1.3rem")};
`;
const BtnText = styled.span``;
const baseBtn = css`
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
`;
const GoogleBtn = styled.button`
  ${baseBtn}
  background-color: #fff;
  border: none;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 12%), 0 2px 2px 0 rgb(0 0 0 / 24%);
`;
const LineBtn = styled.button`
  ${baseBtn}
  background: #61ee3d;
`;
const Divider = styled.p`
  text-align: center;
  color: #707070;
  margin: 1rem 0;
`;
export default WelcomeView;
