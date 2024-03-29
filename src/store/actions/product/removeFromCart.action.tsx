import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { AppThunk } from "../../store";
import { cartActions } from "../../slice/Cart.slice";
import { removeFromCartApi } from "../../../api/user.api";

export interface IRemoveFromCartAction {
  qty: number;
  productId: string;
  size: string;
}
const removeFromCart = ({
  qty,
  productId,
  size,
}: IRemoveFromCartAction): AppThunk => {
  return async (dispatch) => {
    try {
      await removeFromCartApi({ productId, size });
      dispatch(cartActions.removeFromCart({ productId, size }));
      dispatch(cartActions.setCartLength(qty * -1));
    } catch (error) {
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
};
export default removeFromCart;
