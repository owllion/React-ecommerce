import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  errorMsg: string;
  isLoading: boolean;
  showSearch: boolean;
}

const initialState: IState = {
  errorMsg: "",
  isLoading: false,
  showSearch: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setError(state, { payload }: PayloadAction<string>) {
      state.errorMsg = payload;
    },
    setErrorClear(state) {
      state.errorMsg = "";
    },
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setShowSearch(state, { payload }: PayloadAction<boolean>) {
      state.showSearch = payload;
    },
  },
});

export const commonActions = commonSlice.actions;
export default commonSlice;
