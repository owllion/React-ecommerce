import { useAppSelector } from "../store/hooks";

export const useToken = () => {
  const token = useAppSelector((state) => state.auth.token);
  const refreshToken = useAppSelector((state) => state.auth.refreshToken);

  return {
    token,
    refreshToken,
  };
};
