import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { AppThunk } from "../../store";
import { cartActions } from "../../slice/Cart.slice";
import { removeFromCartApi } from "../../../api/user.api";

export interface IRemoveFromCartAction {
  qty: number;
  id: string;
  size: string;
}
const removeFromCart = ({ qty, id, size }: IRemoveFromCartAction): AppThunk => {
  return async (dispatch) => {
    console.log(qty, id, size, "全部印出");
    try {
      await removeFromCartApi({ product_id: id, size });
      dispatch(cartActions.removeFromCart({ id, size }));
      dispatch(cartActions.setCartLength(qty * -1));
    } catch (error) {
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
};
export default removeFromCart;
