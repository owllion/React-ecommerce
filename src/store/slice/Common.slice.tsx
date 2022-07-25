import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILoading {
  isLoading: boolean;
}

const commonSlice = createSlice({
  name: "common",
  initialState: {
    errorMsg: "",
    loading: false,
  },
  reducers: {
    setError(state, { payload }: PayloadAction<Error>) {
      state.errorMsg = payload.message;
    },
    setErrorClear(state) {
      state.errorMsg = "";
    },
    setLoading(state, { payload }: PayloadAction<ILoading>) {
      state.loading = payload.isLoading;
    },
  },
});

export const commonActions = commonSlice.actions;
export default commonSlice;
