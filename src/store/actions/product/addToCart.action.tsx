import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { AppThunk } from "../../store";
import { addToCartApi } from "src/api/user.api";
import { commonActions } from "../../slice/Common.slice";
import { cartActions } from "../../slice/Cart.slice";

interface IProps {
  /**
   * cartBtnPosition -->
   * productList's each item has one cartBtn,default is to add only one item to cart.
   * ProductDetail page has another one. THe number of product is not fixed. So we need this value to decide which value we should pass.
   */
  cartBtnPosition: string;
  productId: string;
  size: string;
}
const addToCart = ({ cartBtnPosition, productId, size }: IProps): AppThunk => {
  const getToken = () => localStorage.getItem("token");

  return async (dispatch, getState) => {
    if (!getToken()) return toast.error("You need to login");

    const { itemQty } = getState().common;
    let addOneToCart = cartBtnPosition === "card" ? true : false;
    const qty = addOneToCart ? 1 : itemQty;

    try {
      dispatch(commonActions.setLoading(true));

      await addToCartApi({ productId, qty, size });
      dispatch(cartActions.setCartLength(qty));

      toast.success("Add Product To Cart");

      dispatch(commonActions.setLoading(false));
    } catch (error) {
      dispatch(commonActions.setLoading(false));

      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
};
export default addToCart;
