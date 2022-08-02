import React from "react";
import { Navigate } from "react-router-dom";

type IProps = React.PropsWithChildren<{ token: string; redirectPath?: string }>;
const ProtectedRoute = ({ children, token }: IProps) => {
  console.log({ token });
  return !token ? <Navigate replace to="/login/welcome" /> : children;
};

export default ProtectedRoute;
