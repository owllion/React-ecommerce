import instance from "./axios";
import * as AuthInterface from "../interface/auth.interface";

//ok
export const loginApi = (data: AuthInterface.ILogin) =>
  instance.post("/auth/login", data);

//social login
//1.github - ok
export const githubLoginApi = () => instance.get("/auth/github-login");

//ok
export const githubAuthApi = (data: AuthInterface.ISocialLogin) =>
  instance.post("/auth/github-auth", data);

//2.google - 和上面兩個驗證方式不一樣 - ok
export const googleLoginApi = (data: AuthInterface.IGoogleLogin) =>
  instance.get(`/auth/google-login?access_token=${data.access_token}`);

//ok
export const registerApi = (data: AuthInterface.IRegister) =>
  instance.post("/auth/register", data);
//no
export const checkIfAccountExists = (data: AuthInterface.ICheckAccount) =>
  instance.post("/auth/check-account", data);
//ok
export const getRefreshToken = (data: AuthInterface.IGetRefreshToken) =>
  instance.post("/refresh-token", data);
//ok
export const verifyTokenApi = (data: AuthInterface.IVerifyToken) =>
  instance.post("/auth/verify-token", data);
//no
export const sendLink = (data: AuthInterface.ISendVerifyLink) =>
  instance.post("/auth/send-link", data);

//ok
export const checkIfTokenIsValid = (data: AuthInterface.ICheckToken) =>
  instance.post("/auth/check-token", data);

//直接刪除localstorage即可
// export const logoutApi = () => instance.get("/logout");
