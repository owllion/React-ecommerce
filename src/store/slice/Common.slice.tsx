import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  errorMsg: string;
  loading: boolean;
  showSearch: boolean;
}

const initialState: IState = {
  errorMsg: "",
  loading: false,
  showSearch: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setError(state, { payload }: PayloadAction<Error>) {
      state.errorMsg = payload.message;
    },
    setErrorClear(state) {
      state.errorMsg = "";
    },
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
    setShowSearch(state, { payload }: PayloadAction<boolean>) {
      state.showSearch = payload;
    },
  },
});

export const commonActions = commonSlice.actions;
export default commonSlice;
