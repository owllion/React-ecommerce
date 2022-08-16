import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  discount: number;
  finalTotal: number;
}
const initialState: IState = {
  discount: 0,
  finalTotal: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setDiscount(state, { payload }: PayloadAction<number>) {
      state.discount = payload;
    },
    setFinalTotal(state, { payload }: PayloadAction<number>) {
      state.finalTotal = payload;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice;
