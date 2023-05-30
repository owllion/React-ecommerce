import { AppThunk } from "../../store";
import { IUser, IUserInfo } from "src/interface/user.interface";
import { authActions } from "../../slice/Auth.slice";
import { cartActions } from "../../slice/Cart.slice";
import { userActions } from "../../slice/User.slice";

interface IProps {
  user: IUserInfo;
  token: string;
  refreshToken: string;
  cartLength: number;
  type: "email" | "google" | "github";
}
export const authRelatedAction = ({
  user,
  token,
  refreshToken,
  cartLength,
  type,
}: IProps): AppThunk => {
  return async (dispatch) => {
    dispatch(authActions.setToken(token));
    dispatch(authActions.setRefreshToken(refreshToken));
    dispatch(cartActions.resetCartLength());
    dispatch(cartActions.setCartLength(cartLength));

    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("loginType", type);
    localStorage.setItem("cartLength", String(cartLength));

    if (type === "email") {
      dispatch(userActions.setUserInfo({ ...user }));
    } else if (type === "google") {
      dispatch(userActions.setGoogleLoginInfo({ ...user }));
    } else {
      dispatch(userActions.setGithubLoginInfo({ ...user }));
    }
  };
};
