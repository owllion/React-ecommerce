import instance from "./axios";
import * as AuthInterface from "../interface/auth.interface";

export const login = (data: AuthInterface.ILogin) =>
  instance.post("/login", data);

export const checkIfAccountExists = (data: AuthInterface.ICheckAccount) =>
  instance.post("/check-account", data);

export const register = (data: AuthInterface.IRegister) =>
  instance.post("/register", data);

export const getRefreshToken = (data: AuthInterface.IGetRefreshToken) =>
  instance.post("/getRefreshToken", data);

export const logout = () => instance.get("/logout");
