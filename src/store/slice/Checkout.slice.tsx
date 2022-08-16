import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  discount: number;
  discountCode: string;
  shipping: number;
  total: number;
  discountTotal: number;
}
const initialState: IState = {
  discount: 0,
  discountCode: "",
  shipping: 0,
  total: 0,
  discountTotal: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setDiscount(state, { payload }: PayloadAction<number>) {
      state.discount = payload;
    },
    setDiscountInfo(
      state,
      { payload }: PayloadAction<Omit<IState, "total" | "shipping">>
    ) {
      state.discount = payload.discount;
      state.discountCode = payload.discountCode;
      state.discountTotal = payload.discountTotal;
    },
    setTotalAndShipping(
      state,
      { payload }: PayloadAction<Pick<IState, "total" | "shipping">>
    ) {
      state.shipping = payload.shipping;
      state.total = payload.total;
    },
    clearInfo(state) {
      state.shipping = 0;
      state.total = 0;
      state.discount = 0;
      state.discountCode = "";
      state.discountTotal = 0;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice;
