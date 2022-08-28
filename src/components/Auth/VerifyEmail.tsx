import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AnyAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { MainTitle } from "./auth.style";
import VerifySuccess from "../../assets/login/verify-success.png";
import TokenExpired from "../../assets/login/token-expired.png";
import SuccessUnderline from "../../assets/login/success-underline.svg";
import ErrorUnderline from "../../assets/login/error-underline.svg";
import { verifyUserApi } from "../../api/auth.api";
import AuthFormTemplate from "./AuthFormTemplate";
import AuthBtn from "./AuthBtn";
import { IAuthResult } from "../../store/actions/auth/signInOrSignUp.action";
import { authRelatedAction } from "../../store/actions/auth/authRelatedAction.action";
import { commonActions } from "../../store/slice/Common.slice";
import toast from "react-hot-toast";

const SendLinkNotification = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.common);
  const [isVerified, setIsVerified] = useState(true);
  const params = useParams();
  const { token } = params as { token: string };
  console.log(token, "this is token");
  const verifyUser = async () => {
    try {
      dispatch(commonActions.setLoading(true));
      await verifyUserApi({ token });
      const {
        data: {
          result: { token: accessToken, refreshToken, user },
        },
      }: {
        data: IAuthResult;
      } = await verifyUserApi({ token });
      setIsVerified(true);
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
      setIsVerified(false);
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
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
        <Link to={"/settings/account"}>
          <AuthBtn btnText="Go To Profile" />
        </Link>
      ) : (
        <Link to={"/auth/welcome"}>
          <AuthBtn btnText="Back To Login" />
        </Link>
      )}
    </AuthFormTemplate>
  );
};

const MainTitleBox = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 55px;
  ${MainTitle} {
    text-align: center;
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
export default SendLinkNotification;
