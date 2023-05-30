import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  discount: number;
  discount_code: string;
  shipping: number;
  total: number;
  discount_total: number;
}
const initialState: IState = {
  discount: 0,
  discount_code: "",
  shipping: 0,
  total: 0,
  discount_total: 0,
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
      state.discount_code = payload.discount_code;
      state.discount_total = payload.discount_total;
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
      state.discount_code = "";
      state.discount_total = 0;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice;
