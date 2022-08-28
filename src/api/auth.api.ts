import instance from "./axios";
import * as AuthInterface from "../interface/auth.interface";

export const loginApi = (data: AuthInterface.ILogin) =>
  instance.post("/auth/login", data);

export const googleLoginApi = (data: AuthInterface.IGoogleLogin) =>
  instance.post("/auth/google-login", data);

export const registerApi = (data: AuthInterface.IRegister) =>
  instance.post("/auth/register", data);

export const checkIfAccountExists = (data: AuthInterface.ICheckAccount) =>
  instance.post("/auth/check-account", data);

export const getRefreshToken = (data: AuthInterface.IGetRefreshToken) =>
  instance.post("/refresh-token", data);

export const verifyUserApi = (data: AuthInterface.IVerifyUserEmail) =>
  instance.post("/auth/verify-user", data);

export const sendLink = (data: AuthInterface.ISendVerifyLink) =>
  instance.post("/auth/send-link", data);

export const checkIfTokenIsValid = (data: AuthInterface.ICheckToken) =>
  instance.post("/auth/check-token", data);

export const logoutApi = () => instance.get("/logout");
