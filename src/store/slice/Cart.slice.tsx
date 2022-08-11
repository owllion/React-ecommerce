import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  cartLength: number | null;
}

const initialState: IState = {
  cartLength: null,
};

const cartSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setCartLength(state, { payload }: PayloadAction<number>) {
      state.cartLength! += payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
