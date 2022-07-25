import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../interface/order.interface";
interface DisProps {
  finalPrice: number;
  discount: number;
}

const orderSlice = createSlice({
  name: "order",
  initialState: {
    finalPrice: 0,
    discount: 0,
    detail: {},
    orderItem: [],
  },
  reducers: {
    setDisAndPrice(state, { payload }: PayloadAction<DisProps>) {
      state.finalPrice = payload.finalPrice;
      state.discount = payload.discount;
    },
    clearDisAndPrice(state) {
      state.finalPrice = 0;
      state.discount = 0;
    },
    setOrderDetail(state, { payload }: PayloadAction<IOrder>) {
      state.detail = payload;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice;
