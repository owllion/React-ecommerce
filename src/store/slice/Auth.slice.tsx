import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    clearToken(state) {
      state.token = "";
      state.refreshToken = "";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
