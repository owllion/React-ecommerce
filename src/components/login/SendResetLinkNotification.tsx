import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import cl from "../../constants/color/color.js";
import { MainTitle, SubTitle, Btn, BtnText } from "../Login/Common.style";
import EmailImg from "../../assets/login/at-sign.png";

const SendResetLinkNotification = () => {
  return (
    <Container>
      <IconContainer>
        <Icon src={EmailImg} />
      </IconContainer>
      <MainTitle>Check your email</MainTitle>
      <BreakSubTitle>
        <span>A password reset link was sent.</span>
        <span>Don't forget to check your spam box.</span>
      </BreakSubTitle>
      <BtnBox>
        <Link to={"/login/welcome"}>
          <Btn bgColor={`${cl.dark}`}>
            <BtnText color={`${cl.white}`}>Back To Login</BtnText>
          </Btn>
        </Link>
      </BtnBox>
    </Container>
  );
};

const Container = styled.div``;
const BreakSubTitle = styled(SubTitle)`
  span {
    display: block;
  }
`;
const IconContainer = styled.div`
  margin-bottom: 0.5rem;
`;
const Icon = styled.img``;
const BtnBox = styled.div`
  margin-top: 1.3rem;
`;
export default SendResetLinkNotification;