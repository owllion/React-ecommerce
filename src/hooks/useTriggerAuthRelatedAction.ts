import { IUserInfo } from "src/interface/user.interface";
import { useAppDispatch } from "../store/hooks";
import { authActions } from "../store/slice/Auth.slice";
import { cartActions } from "../store/slice/Cart.slice";
import { userActions } from "../store/slice/User.slice";

interface IProps {
  user: IUserInfo;
  token: string;
  refreshToken: string;
  cartLength: number;
}
export const useTriggerAuthRelatedAction = ({
  user,
  token,
  refreshToken,
}: IProps) => {
  const dispatch = useAppDispatch();
  dispatch(authActions.setToken(token));
  dispatch(authActions.setRefreshToken(refreshToken));
  dispatch(cartActions.resetCartLength());
  dispatch(cartActions.setCartLength(user.cartLength));

  localStorage.setItem("token", token);
  localStorage.setItem("refreshToken", refreshToken);
  localStorage.setItem("cartLength", String(user.cartLength));

  dispatch(userActions.setUserInfo({ ...user }));
};
