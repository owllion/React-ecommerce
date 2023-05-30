import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { AppThunk } from "../../store";
import { addToCartApi } from "src/api/user.api";
import { commonActions } from "../../slice/Common.slice";
import { cartActions } from "../../slice/Cart.slice";

interface IProps {
  id: string;
  addOne?: boolean;
  size: string;
}
const addToCart = ({ id, addOne, size }: IProps): AppThunk => {
  const getToken = () => localStorage.getItem("token");

  return async (dispatch, getState) => {
    if (!getToken()) return toast.error("You need to login");

    const { itemQty } = getState().common;

    const qty = addOne ? 1 : itemQty;

    try {
      dispatch(commonActions.setCartLoading(true));

      await addToCartApi({ product_id: id, qty, size });
      dispatch(cartActions.setCartLength(qty));

      toast.success("Add Product To Cart");

      dispatch(commonActions.setShowPopup(false));

      dispatch(commonActions.setCartLoading(false));
    } catch (error) {
      dispatch(commonActions.setCartLoading(false));

      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
};
export default addToCart;
