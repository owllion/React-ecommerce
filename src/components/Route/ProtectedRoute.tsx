import { Navigate, Outlet } from "react-router-dom";

// type IProps = React.PropsWithChildren;
const ProtectedRoute = ({ children }: { children?: JSX.Element }) => {
  const accessToken = () => localStorage.getItem("token");

  if (!accessToken()) return <Navigate replace to="/auth/welcome" />;

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
