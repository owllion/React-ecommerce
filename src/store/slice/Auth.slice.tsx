import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as AuthInterface from "../../interface/auth.interface";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    refreshToken: "",
  },
  reducers: {
    login(state, { payload }: PayloadAction<AuthInterface.ILogin>) {},
    // register(state, { payload }: PayloadAction<Data>) {},

    logout(state) {
      state.token = "";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
