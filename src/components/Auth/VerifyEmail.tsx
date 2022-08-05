import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IoSadOutline } from "react-icons/io5";

import cl from "../../constants/color/color.js";
import { MainTitle, SubTitle, Btn, BtnText } from "./Common.style";
import VerifySuccess from "../../assets/login/verify-success.png";
import TokenExpired from "../../assets/login/token-expired.png";
import SuccessUnderline from "../../assets/login/success-underline.svg";
import ErrorUnderline from "../../assets/login/error-underline.svg";
import { verifyUserEmailApi } from "../../api/auth.api";

const SendLinkNotification = () => {
  const [isVerified, setIsVerified] = useState(false);

  const params = useParams();
  const { token } = params as { token: string };

  useEffect(() => {
    const verifyUserEmail = async () => {
      try {
        const {
          data: { verified },
        } = await verifyUserEmailApi({ token });
        setIsVerified(verified);
      } catch (error) {
        console.log(error);
      }
    };
    verifyUserEmail();
  }, []);
  return (
    <Container>
      <IconContainer>
        <Icon src={isVerified ? VerifySuccess : TokenExpired} />
      </IconContainer>
      <MainTitleBox>
        <MessageBox>
          <MainTitle>
            <HasUnderline>
              <Lines
                isVerified={isVerified}
                underline={isVerified ? SuccessUnderline : ErrorUnderline}
              ></Lines>
              {isVerified ? "Email has been verified !" : "Token is expired!"}
            </HasUnderline>
          </MainTitle>
        </MessageBox>
      </MainTitleBox>
      {/* <BreakSubTitle>
        <span>A {linkType} link was sent.</span>
        <span>Don't forget to check your spam box.</span>
      </BreakSubTitle> */}
      <BtnBox>
        <Link to={"/auth/welcome"} state={{ email: "re" }}>
          <Btn bgColor={`${cl.dark}`}>
            <BtnText color={`${cl.white}`}>Back To Login</BtnText>
          </Btn>
        </Link>
      </BtnBox>
    </Container>
  );
};

const Container = styled.div``;
const MainTitleBox = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: rgba(225, 22, 225, 0.1); */
  min-height: 55px;
  /* border: 1px solid red;
  border-radius: 8px; */
  ${MainTitle} {
    text-align: center;
    /* border: 2px solid orange; */
    /* color: rgba(225, 22, 225, 0.8); */
  }
`;
const HasUnderline = styled.span`
  position: relative;
  display: inline-block;
`;
const Lines = styled.span<{ underline: string; isVerified: boolean }>`
  position: absolute;
  top: -10px;
  right: -17px;
  left: -3px;
  bottom: -3px;
  /* border: 1px solid green; */
  &:before {
    content: " ";
    position: absolute;
    ${({ isVerified }) =>
      isVerified
        ? css`
            top: -5px;
            left: -6px;
            right: -13px;
            bottom: -9px;
          `
        : css`
            top: -5px;
            left: -81px;
            right: -43px;
            bottom: -12px;
            z-index: -2;
          `}
    /* top: -5px;
    left: -81px;
    right: -43px;
    bottom: -12px;
    z-index: -2;

    top: -5px;
    left: -6px;
    right: -13px;
    bottom: -9px; */
    // z-index: -2;
    background-image: ${({ underline }) => `url(${underline})`};
    background-size: 324px 90px;
    background-position: 100%;
    background-repeat: no-repeat;
    border-left-width: 9px;
    border-right: none;
    border-style: solid;
    -o-border-image: linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0)) 1 100%;
    border-image: linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0)) 1 100%;
  }
`;
const MessageBox = styled.div`
  display: flex;
  align-items: center;
`;
const BreakSubTitle = styled(SubTitle)`
  span {
    display: block;
  }
`;
const IconContainer = styled.div`
  margin-bottom: 0.5rem;
  width: 130px;
`;
const Icon = styled.img`
  width: 100%;
`;
const BtnBox = styled.div`
  margin-top: 1.3rem;
`;
export default SendLinkNotification;
