import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";

import cl from "../../constants/color/color.js";
import { MainTitle, SubTitle, Btn, BtnText } from "./Common.style";
import EmailImg from "../../assets/login/at-sign.png";

const SendLinkNotification = () => {
  const params = useParams();
  const { linkType } = params;

  const location = useLocation();
  const { email } = location.state as { email: string };

  return (
    <Container>
      <IconContainer>
        <Icon src={EmailImg} />
      </IconContainer>
      <MainTitle>Check your email</MainTitle>
      <BreakSubTitle>
        <span>A {linkType} link was sent.</span>
        <span>Don't forget to check your spam box.</span>
      </BreakSubTitle>
      <BtnBox>
        <Link to={"/login/user-login"} state={{ email }}>
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
export default SendLinkNotification;
