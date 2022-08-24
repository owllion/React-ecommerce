import { AppThunk } from "../../store";
import { IUserInfo } from "src/interface/user.interface";
import { authActions } from "../../slice/Auth.slice";
import { cartActions } from "../../slice/Cart.slice";
import { userActions } from "../../slice/User.slice";

interface IProps {
  user: IUserInfo;
  token: string;
  refreshToken: string;
  cartLength: number;
  type: "email" | "google";
}
export const authRelatedAction = ({
  user,
  token,
  refreshToken,
  type,
}: IProps): AppThunk => {
  return async (dispatch) => {
    dispatch(authActions.setToken(token));
    dispatch(authActions.setRefreshToken(refreshToken));
    dispatch(cartActions.resetCartLength());
    dispatch(cartActions.setCartLength(user.cartLength));

    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("cartLength", String(user.cartLength));
    localStorage.setItem("loginType", type);

    type === "email"
      ? dispatch(userActions.setUserInfo({ ...user }))
      : dispatch(userActions.setGoogleLoginInfo({ ...user }));
  };
};
