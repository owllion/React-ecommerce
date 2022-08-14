import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  isShippingReady: boolean;
  isPaymentReady: boolean;
}
const initialState: IState = {
  isShippingReady: false,
  isPaymentReady: false,
};
interface IIsReady {
  form: string;
  isReady: boolean;
}

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setIsReady(state, { payload }: PayloadAction<IIsReady>) {
      state[`is${payload.form}Ready` as "isShippingReady" | "isPaymentReady"] =
        payload.isReady;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice;
