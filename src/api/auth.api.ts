import instance from "./axios";
import * as AuthInterface from "../interface/auth.interface";

export const loginApi = (data: AuthInterface.ILogin) =>
  instance.post("/auth/login", data);

//social login

//1.fb
export const fbLoginApi = () => instance.get("/auth/fb-login");

export const fbAuthApi = (data: AuthInterface.ISocialLogin) =>
  instance.get(`/auth/fb-auth?access_token=${data.access_token}`);

//2.github
export const githubLoginApi = () => instance.get("/auth/github-login");

export const githubAuthApi = (data: AuthInterface.ISocialLogin) =>
  instance.get(`/auth/github-auth?access_token=${data.access_token}`);

//3.google - 和上面兩個驗證方式不一樣
export const googleLoginApi = (data: AuthInterface.ISocialLogin) =>
  instance.get(`/auth/google-login?access_token=${data.access_token}`);

//social login

export const registerApi = (data: AuthInterface.IRegister) =>
  instance.post("/auth/register", data);

export const checkIfAccountExists = (data: AuthInterface.ICheckAccount) =>
  instance.post("/auth/check-account", data);

export const getRefreshToken = (data: AuthInterface.IGetRefreshToken) =>
  instance.post("/refresh-token", data);

export const verifyTokenApi = (data: AuthInterface.IVerifyToken) =>
  instance.post("/auth/verify-token", data);

export const sendLink = (data: AuthInterface.ISendVerifyLink) =>
  instance.post("/auth/send-link", data);

export const checkIfTokenIsValid = (data: AuthInterface.ICheckToken) =>
  instance.post("/auth/check-token", data);

export const logoutApi = () => instance.get("/logout");
