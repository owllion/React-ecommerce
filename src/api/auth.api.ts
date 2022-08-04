import instance from "./axios";
import * as AuthInterface from "../interface/auth.interface";

export const login = (data: AuthInterface.ILogin) =>
  instance.post("/auth/login", data);

export const checkIfAccountExists = (data: AuthInterface.ICheckAccount) =>
  instance.post("/auth/check-account", data);

export const registerApi = (data: AuthInterface.IRegister) =>
  instance.post("/auth/register", data);

export const getRefreshToken = (data: AuthInterface.IGetRefreshToken) =>
  instance.post("/auth/getRefreshToken", data);

export const logout = () => instance.get("/logout");
