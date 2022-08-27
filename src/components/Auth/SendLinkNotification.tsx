import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import cl from "../../constants/color/color.js";
import {
  MainTitle,
  SubTitle,
  Btn,
  BtnText,
  TopImgContainer,
  TopImg,
} from "./auth.style";
import CheckEmailImg from "../../assets/login/check-email.png";

const SendLinkNotification = () => {
  const location = useLocation();
  const { email, type } = location.state as { email: string; type: string };

  return (
    <Container>
      <TopImgContainer>
        <TopImg src={CheckEmailImg} />
      </TopImgContainer>
      <MainTitle>Check your email</MainTitle>
      <BreakSubTitle>
        <span>A {type} link was sent.</span>
        <span>Don't forget to check your spam box.</span>
      </BreakSubTitle>
      <BtnBox>
        <Link to={"/auth/user-login"} state={{ email }}>
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
const BtnBox = styled.div`
  margin-top: 1.3rem;
`;
export default SendLinkNotification;
