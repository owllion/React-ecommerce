import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  errorMsg: string;
  isLoading: boolean;
  favLoading: boolean;
  showSearch: boolean;
  itemQty: number;
}
interface IItemQty {
  type: string;
}

const initialState: IState = {
  errorMsg: "",
  isLoading: false,
  favLoading: false,
  showSearch: false,
  itemQty: 1,
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
    setFavLoading(state, { payload }: PayloadAction<boolean>) {
      state.favLoading = payload;
    },
    setShowSearch(state, { payload }: PayloadAction<boolean>) {
      state.showSearch = payload;
    },
    setItemQty(state, { payload }: PayloadAction<IItemQty>) {
      payload.type === "inc" ? (state.itemQty += 1) : (state.itemQty -= 1);
    },
  },
});

export const commonActions = commonSlice.actions;
export default commonSlice;
