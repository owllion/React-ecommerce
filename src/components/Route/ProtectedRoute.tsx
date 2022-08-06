import React from "react";
import { Navigate } from "react-router-dom";

type IProps = React.PropsWithChildren<{ token: string; redirectPath?: string }>;
const ProtectedRoute = ({ children, token }: IProps) => {
  return !token ? <Navigate replace to="/auth/welcome" /> : children;
};

export default ProtectedRoute;
