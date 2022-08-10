import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  errorMsg: string;
  isLoading: boolean;
  showSearch: boolean;
  itemNum: number;
}
interface IItemNum {
  type: string;
  num: number;
}

const initialState: IState = {
  errorMsg: "",
  isLoading: false,
  showSearch: false,
  itemNum: 1,
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
    setItemNum(state, { payload }: PayloadAction<IItemNum>) {
      payload.type === "inc" ? (state.itemNum += 1) : (state.itemNum -= 1);
    },
  },
});

export const commonActions = commonSlice.actions;
export default commonSlice;
