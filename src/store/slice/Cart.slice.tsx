import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "src/interface/product.interface";
interface IState {
  cartLength: number | null;
  cartList: IProduct[];
}
interface IUpdateCartListItemQty {
  type: string;
  productId: string;
}
const isValidQty = (currentQty: number) => {
  return currentQty < 10 && currentQty > 2;
};
const qtyHandler = (currentQty: number, type: string) => {
  return isValidQty(currentQty) && type === "inc"
    ? (currentQty += 1)
    : (currentQty -= 1);
};
const initialState: IState = {
  cartLength: null,
  cartList: [],
};

const cartSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setCartLength(state, { payload }: PayloadAction<number>) {
      state.cartLength! += payload;
    },
    setCartList(state, { payload }: PayloadAction<IProduct[]>) {
      state.cartList = payload;
    },
    updateCartListItemQty(
      state,
      { payload }: PayloadAction<IUpdateCartListItemQty>
    ) {
      state.cartList = state.cartList.map((item) =>
        item.productId === payload.productId
          ? {
              ...item,
              qty: qtyHandler(item.qty!, payload.type),
            }
          : item
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
