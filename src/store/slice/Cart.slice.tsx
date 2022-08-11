import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  cartLength: number;
}

const initialState: IState = {
  cartLength: 0,
};

const cartSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setCartLength(state, { payload }: PayloadAction<number>) {
      state.cartLength += payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
