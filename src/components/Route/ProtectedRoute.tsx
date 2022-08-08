import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
// type IProps = React.PropsWithChildren;
const ProtectedRoute = ({ children }: { children?: JSX.Element }) => {
  const accessToken = () => localStorage.getItem("token");
  const refreshToken = () => localStorage.getItem("refreshToken");
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  React.useEffect(() => {
    if (accessToken() && refreshToken()) {
      setIsAuthenticated(true);
    }
  }, [accessToken(), refreshToken()]);
  const { token } = useAppSelector((x) => x.auth);
  if (!accessToken()) return <Navigate replace to="/auth/welcome" />;

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
