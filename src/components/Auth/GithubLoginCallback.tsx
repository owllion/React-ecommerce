import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { AnyAction } from "@reduxjs/toolkit";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAppDispatch } from "../../store/hooks";
import { verifyTokenApi } from "../../api/auth.api";
import { IAuthResult } from "../../store/actions/auth/signInOrSignUp.action";
import { authRelatedAction } from "../../store/actions/auth/authRelatedAction.action";
import { commonActions } from "../../store/slice/Common.slice";
import { sendLink } from "src/api/auth.api";
import VerifyState from "./verify/VerifyState";

import { githubAuthApi } from "../../api/auth.api";
const GithubLoginCallback = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isVerified, setIsVerified] = useState(true);

  const verifyToken = async () => {
    try {
      dispatch(commonActions.setLoading(true));
      const {
        data: { token: accessToken, refresh_token, user, cart_length },
      }: {
        data: IAuthResult;
      } = await githubAuthApi({ reqUrl: window.location.toString() });
      setIsVerified(true);
      dispatch(
        authRelatedAction({
          user,
          token: accessToken,
          refreshToken: refresh_token,
          cartLength: cart_length,
          type: "github",
        }) as unknown as AnyAction
      );
      dispatch(commonActions.setLoading(false));
      navigate("/");
    } catch (error) {
      dispatch(commonActions.setLoading(false));
      setIsVerified(false);
    }
  };
  useEffect(() => {
    verifyToken();
  }, []);

  return <div></div>;
};

export default GithubLoginCallback;
