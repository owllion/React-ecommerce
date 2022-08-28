import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { AnyAction } from "@reduxjs/toolkit";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAppDispatch } from "../../../store/hooks";
import { verifyUserApi } from "../../../api/auth.api";
import { IAuthResult } from "../../../store/actions/auth/signInOrSignUp.action";
import { authRelatedAction } from "../../../store/actions/auth/authRelatedAction.action";
import { commonActions } from "../../../store/slice/Common.slice";
import { sendLink } from "src/api/auth.api";
import VerifyState from "./VerifyState";

const SendLinkNotification = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isVerified, setIsVerified] = useState(true);
  const params = useParams();
  const { token } = params as { token: string };

  interface FormValue {
    email: string;
  }

  const methods = useForm<FormValue>();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    await handleSendVerifyLink(data.email);
  };

  const handleSendVerifyLink = async (email: string) => {
    try {
      await sendLink({ email, type: "verify" });
      navigate("/auth/verify-email/notification", {
        state: { email, type: "verify email" },
        replace: true,
      });
    } catch (error) {
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };

  const verifyUser = async () => {
    try {
      dispatch(commonActions.setLoading(true));
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
    }
  };
  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <VerifyState isVerified={isVerified} />
      </FormContainer>
    </FormProvider>
  );
};
const FormContainer = styled.form``;

export default SendLinkNotification;
