import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/product.interface";
import { IReview } from "../../interface/review.interface";
import { IUser } from "../../interface/user.interface";
import { IUserInfo } from "src/interface/user.interface";

const initialState: Partial<IUser> = {
  firstName: "",
  email: "",
  fullName: "",
  lastName: "",
  avatarUpload: "",
  avatarDefault: "",
  phone: "",
  favList: [],
  reviewList: [],
  locale: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, { payload }: PayloadAction<IUserInfo>) {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.phone = payload.phone;
      state.avatarUpload = payload.avatarUpload;
      state.avatarDefault = payload.avatarDefault;
      state.favList = payload.favList;
    },
    setGoogleLoginInfo(state, { payload }: PayloadAction<IUserInfo>) {
      const {
        email,
        phone,
        fullName,
        avatarDefault,
        avatarUpload,
        favList,
        locale,
      } = payload;
      state.fullName = fullName;
      state.email = email;
      state.phone = phone;
      state.avatarDefault = avatarDefault;
      state.avatarUpload = avatarUpload;
      state.favList = favList;
      state.locale = locale;
    },
    updateUserInfo(state, { payload }: PayloadAction<Partial<IUser>>) {
      state.phone = payload.phone;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.fullName = payload.fullName;
    },
    addToFav(state, { payload }: PayloadAction<IProduct>) {
      state.favList?.push(payload);
    },
    removeFromFav(state, { payload }: PayloadAction<IProduct>) {
      state.favList = state.favList?.filter(
        (item) => item?.productId !== payload.productId
      );
    },
    setFavList(state, { payload }: PayloadAction<IProduct[]>) {
      state.favList = payload;
    },
    setReviewList(state, { payload }: PayloadAction<IReview[]>) {
      state.reviewList = payload;
    },
    updateReview(
      state,
      { payload }: PayloadAction<{ reviewId: string; comment: string }>
    ) {
      state.reviewList = state.reviewList?.map((review) =>
        review.reviewId === payload.reviewId
          ? { ...review, comment: payload.comment }
          : review
      );
    },
    updateAvatarUpload(state, { payload }: PayloadAction<string>) {
      state.avatarUpload = payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
