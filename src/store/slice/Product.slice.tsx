import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReview, IUserReview } from "../../interface/review.interface";
import { IProduct } from "../../interface/product.interface";
export interface ProductState {
  productId: string;
  productList: (IProduct | Partial<IProduct>)[];
  reviews: IReview[];
  selectedCategory: string[];
  selectedBrand: string[];
  selectedPrice: string;
  selectedSort: string;
  curPage: number;
  isTargetWidth: boolean;
  totalNum: number;
}

const initialState = {
  productId: "",
  productList: [],
  reviews: [],

  selectedCategory: [],
  selectedBrand: [],
  selectedPrice: "",
  selectedSort: "",
  curPage: 1,
  isTargetWidth: false,
  totalNum: 0,
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
    setSort(state, { payload }: PayloadAction<string>) {
      state.selectedSort = payload;
    },
    setIsTargetWidth(state, { payload }: PayloadAction<boolean>) {
      state.isTargetWidth = payload;
    },
    setProductList(state, { payload }: PayloadAction<IProduct[]>) {
      state.productList = payload;
    },
    filterProductList(state, { payload }: PayloadAction<string | undefined>) {
      console.log(payload, "收到的字串");
      console.log(
        state.productList.filter((item) =>
          payload ? item.product_name?.toLowerCase().includes(payload) : item
        ),
        "這是filter節果"
      );
      state.productList = [...state.productList].filter((item) =>
        payload ? item.product_name?.toLowerCase().includes(payload) : item
      );
    },
    setTotalProductNum(state, { payload }: PayloadAction<number>) {
      state.totalNum = payload;
    },
    setCurPage(state, { payload }: PayloadAction<number>) {
      state.curPage = payload;
    },
    clearAllState(state) {
      state.selectedPrice = "";
      state.selectedBrand = [];
      state.selectedCategory = [];
      state.selectedSort = "";
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
