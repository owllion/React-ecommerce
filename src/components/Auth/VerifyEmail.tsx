import { useState, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AnyAction } from "@reduxjs/toolkit";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { MainTitle, SubTitle } from "./auth.style";
import VerifySuccess from "../../assets/login/verify-success.png";
import TokenExpired from "../../assets/login/token-expired.png";
import SuccessUnderline from "../../assets/login/success-underline.svg";
import ErrorUnderline from "../../assets/login/error-underline.svg";
import { verifyUserApi } from "../../api/auth.api";
import AuthFormTemplate from "./AuthFormTemplate";
import AuthBtn from "./AuthBtn";
import { IAuthResult as ISignInOrUp } from "../../store/actions/auth/signInOrSignUp.action";
import { authRelatedAction } from "../../store/actions/auth/authRelatedAction.action";
import { commonActions } from "../../store/slice/Common.slice";

interface IAuthResult extends ISignInOrUp {
  verified: boolean;
}

const SendLinkNotification = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.common);
  const [isVerified, setIsVerified] = useState(true);
  const params = useParams();
  const { token } = params as { token: string };

  const handleNavigate = () => navigate("/settings/account");
  const verifyUser = async () => {
    try {
      dispatch(commonActions.setLoading(true));
      const {
        data: {
          verified,
          result: { token: accessToken, refreshToken, user },
        },
      }: {
        data: IAuthResult;
      } = await verifyUserApi({ token });
      setIsVerified(verified);
      dispatch(
        authRelatedAction({
          user,
          token: accessToken,
          refreshToken,
          cartLength: user.cartLength,
          type: "email",
        }) as unknown as AnyAction
      );
      dispatch(commonActions.setLoading(false));
    } catch (error) {
      dispatch(commonActions.setLoading(false));
      console.log(error);
    }
  };
  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <AuthFormTemplate
      imgUrl={isVerified ? VerifySuccess : TokenExpired}
      alt="verifyEmailImg"
    >
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
      {isVerified ? (
        <div onClick={() => handleNavigate()}>
          <AuthBtn btnText="Go To Profile" />
        </div>
      ) : (
        <Link to={"/auth/welcome"} state={{ email: "re" }}>
          <AuthBtn btnText="Back To Login" />
        </Link>
      )}
    </AuthFormTemplate>
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
