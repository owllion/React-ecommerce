import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/product.interface";
import { IReview } from "../../interface/review.interface";
import { IUser } from "../../interface/user.interface";
import { IUserInfo } from "src/interface/user.interface";

const initialState: Partial<IUser> = {
  id: "",
  first_name: "",
  email: "",
  fullName: "",
  last_name: "",
  upload_avatar: "",
  default_avatar: "",
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
      state.id = payload.id;
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;
      state.email = payload.email;
      state.phone = payload.phone;
      state.upload_avatar = payload.upload_avatar;
      state.default_avatar = payload.default_avatar;
      state.favList = payload.favList;
    },
    setGoogleLoginInfo(state, { payload }: PayloadAction<IUserInfo>) {
      const {
        email,
        phone,
        fullName,
        default_avatar,
        upload_avatar,
        favList,
        locale,
      } = payload;
      state.fullName = fullName;
      state.email = email;
      state.phone = phone;
      state.default_avatar = default_avatar;
      state.upload_avatar = upload_avatar;
      state.favList = favList;
      state.locale = locale;
    },
    updateUserInfo(state, { payload }: PayloadAction<Partial<IUser>>) {
      state.phone = payload.phone;
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;
      state.fullName = payload.fullName;
    },
    addToFav(state, { payload }: PayloadAction<IProduct>) {
      state.favList?.push(payload);
    },
    removeFromFav(state, { payload }: PayloadAction<IProduct>) {
      state.favList = state.favList?.filter((item) => item?.id !== payload.id);
    },
    setFavList(state, { payload }: PayloadAction<IProduct[]>) {
      state.favList = payload;
    },
    setReviewList(state, { payload }: PayloadAction<IReview[]>) {
      state.reviewList = payload;
    },
    updateReview(
      state,
      { payload }: PayloadAction<{ id: string; comment: string }>
    ) {
      state.reviewList = state.reviewList?.map((review) =>
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
