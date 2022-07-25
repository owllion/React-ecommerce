import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    refreshToken: "",
    name: "",
    email: "",
    avatarDefault: "",
    avatar: "",
    cartList: [],
    couponList: [],
    cartListLength: 0,
    favList: [],
    errorMsg: "",
    loading: false,
  },
  reducers: {
    login(state, { payload }: PayloadAction<Data>) {},
    register(state, { payload }: PayloadAction<Data>) {},

    logout(state) {
      state.token = "";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
