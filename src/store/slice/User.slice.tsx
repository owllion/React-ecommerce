import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/product.interface";
import { IReview, IUserReview } from "../../interface/review.interface";
import { IUser } from "../../interface/user.interface";
import { IUserInfo } from "src/interface/user.interface";

const initialState: Partial<IUser> = {
  id: "",
  email: "",
  first_name: "",
  last_name: "",
  fullName: "",
  upload_avatar: "",
  default_avatar: "",
  phone: "",
  favorites: [],
  reviewList: [],
  userReviews: [],
  locale: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, { payload }: PayloadAction<IUserInfo>) {
      state.id = payload.id;
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;
      state.email = payload.email;
      state.phone = payload.phone;
      state.upload_avatar = payload.upload_avatar;
      state.default_avatar = payload.default_avatar;
      state.favorites = payload.favorites;
    },
    setGoogleLoginInfo(state, { payload }: PayloadAction<IUserInfo>) {
      const {
        id,
        email,
        phone,
        fullName,
        default_avatar,
        upload_avatar,
        favorites,
        locale,
      } = payload;
      state.id = id;
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;
      state.email = email;
      state.phone = phone;
      state.default_avatar = default_avatar;
      state.upload_avatar = upload_avatar;
      state.favorites = favorites;
      state.locale = locale;
    },
    setGithubLoginInfo(state, { payload }: PayloadAction<IUserInfo>) {
      state.id = payload.id;
      state.default_avatar = payload.default_avatar;
      state.upload_avatar = payload.upload_avatar;
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;
      state.phone = payload.phone;
      console.log(payload.favorites, "這是favss!");
      // state.favorites = payload.favorites;
    },
    updateUserInfo(state, { payload }: PayloadAction<Partial<IUser>>) {
      state.phone = payload.phone;
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;
    },
    addToFav(state, { payload }: PayloadAction<IProduct>) {
      state.favorites?.push(payload);
    },
    removeFromFav(state, { payload }: PayloadAction<IProduct>) {
      state.favorites = state.favorites?.filter(
        (item) => item?.id !== payload.id
      );
    },
    setFavorites(state, { payload }: PayloadAction<IProduct[]>) {
      state.favorites = payload;
    },
    setReviewList(state, { payload }: PayloadAction<IReview[]>) {
      state.reviewList = payload;
    },
    setUserReviewList(state, { payload }: PayloadAction<IUserReview[]>) {
      state.userReviews = payload;
    },
    updateReview(
      state,
      { payload }: PayloadAction<{ id: string; comment: string }>
    ) {
      state.userReviews = state.userReviews?.map((review) =>
        review.id === payload.id
          ? { ...review, comment: payload.comment }
          : review
      );
    },
    updateAvatarUpload(state, { payload }: PayloadAction<string>) {
      state.upload_avatar = payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
