import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as AuthInterface from "../../interface/auth.interface";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    refreshToken: "",
  },
  reducers: {
    setToken(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    setRefreshToken(state, { payload }: PayloadAction<string>) {
      state.refreshToken = payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
