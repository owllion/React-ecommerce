import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReview } from "../../interface/review.interface";

interface ProductState {
  productId: string;
  reviews: IReview[];
  selectedCategory: string[];
  selectedBrand: string[];
  selectedPrice: string;
}

const initialState = {
  productId: "",
  reviews: [],
  selectedCategory: [],
  selectedBrand: [],
  selectedPrice: "",
} as ProductState;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductId(state, { payload }: PayloadAction<string>) {
      state.productId = payload;
    },
    setProductReviews(state, { payload }: PayloadAction<IReview[]>) {
      state.reviews = payload;
    },
    updateProductReviews(state, { payload }: PayloadAction<IReview>) {
      state.reviews.push(payload);
    },
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
      else state.selectedBrand.push(payload);
    },
    setPrice(state, { payload }: PayloadAction<string>) {
      state.selectedPrice = payload;
    },
    clearAllState(state) {
      state.selectedPrice = "";
      state.selectedBrand = [];
      state.selectedCategory = [];
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
