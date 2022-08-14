import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  token: string;
  refreshToken: string;
}

const initialState: IState = {
  token: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
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
