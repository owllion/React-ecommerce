import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  selectedCategory: string[];
  selectedBrand: string[];
  selectedPrice: string;
}

const initialState = {
  selectedCategory: [],
  selectedBrand: [],
  selectedPrice: "",
} as ProductState;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategory(state, { payload }: PayloadAction<string>) {
      if (state.selectedCategory.includes(payload))
        state.selectedCategory = state.selectedCategory.filter(
          (el, _) => el !== payload
        );
      else state.selectedCategory.push(payload);
    },
    setBrand(state, { payload }: PayloadAction<string>) {
      if (state.selectedBrand.includes(payload))
        state.selectedBrand = state.selectedBrand.filter(
          (el, _) => el !== payload
        );
      else state.selectedCategory.push(payload);
    },
    setPrice(state, { payload }: PayloadAction<string>) {
      state.selectedPrice = payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
