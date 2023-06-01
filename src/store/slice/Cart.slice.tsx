import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "src/interface/product.interface";
import { IRemoveFromCartAction } from "../actions/product/removeFromCart.action";
import { ICartItem } from "../../components/Checkout/Cart/DesktopCartItem";
import { string } from "prop-types";

interface IState {
  cartLength: number | null;
  cartList: ICartItem[];
  cartId: string;
}
interface IUpdateCartListItemQty {
  type: string;
  id: string;
  size: string;
}

const initialState: IState = {
  cartLength: null,
  cartList: [],
  cartId: "",
};

const cartSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setCartLength(state, { payload }: PayloadAction<number>) {
      state.cartLength! += payload;
    },
    resetCartLength(state) {
      state.cartLength = 0;
    },
    setCartList(state, { payload }: PayloadAction<ICartItem[]>) {
      state.cartList = payload;
    },
    setCartId(state, { payload }: PayloadAction<string>) {
      state.cartId = payload;
    },

    removeFromCart(
      state,
      { payload }: PayloadAction<Omit<IRemoveFromCartAction, "qty">>
    ) {
      const index = state.cartList.findIndex(
        (item) => item.product_id === payload.id && item.size === payload.size
      );
      if (index > -1)
        state.cartList = [
          ...state.cartList.slice(0, index),
          ...state.cartList.slice(index + 1),
        ];
    },
    updateCartListItemQty(
      state,
      { payload }: PayloadAction<IUpdateCartListItemQty>
    ) {
      state.cartList = state.cartList.map((item) =>
        item.product_id === payload.id && item.size === payload.size
          ? {
              ...item,
              qty: payload.type === "inc" ? item.qty! + 1 : item.qty! - 1,
            }
          : item
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
