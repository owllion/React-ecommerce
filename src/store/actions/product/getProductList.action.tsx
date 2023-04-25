import { AxiosRequestConfig, AxiosError } from "axios";
// import { AnyAction } from "redux";
import { AppThunk } from "../../store";
// import { ThunkAction } from "redux-thunk";
import qs from "qs";
import {
  IProductList,
  IProduct,
  IGetProducts,
} from "../../../interface/product.interface";
import { getProductListApi } from "../../../api/product.api";
import { commonActions } from "../../slice/Common.slice";
import { productActions } from "../../slice/Product.slice";

const getProductList = (keyword: string): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const state = getState().product;
      const {
        curPage,
        selectedSort,
        selectedBrand,
        selectedCategory,
        selectedPrice,
        isTargetWidth,
      } = state;

      const getSortAndOrderVal = (type: string, val: string) => {
        return type === "sort"
          ? val.substring(0, val.indexOf("-"))
          : val.substring(val.indexOf("-") + 1);
      };
      // let config: AxiosRequestConfig = {
      //   params: {
      //     page: curPage || 1,
      //     keyword: keyword || "",
      //     sortBy: getSortAndOrderVal("sort", selectedSort),
      //     orderBy:
      //       selectedSort === "all"
      //         ? ""
      //         : getSortAndOrderVal("order", selectedSort),
      //     brands: selectedBrand || "",
      //     categories: selectedCategory || "",
      //     price: selectedPrice || "",
      //   },
      //   paramsSerializer: (params) =>
      //     qs.stringify(params, { arrayFormat: "repeat" }),
      // };
      let config: IGetProducts = {
        page: curPage || 1,
        keyword: keyword || "",
        sortBy: getSortAndOrderVal("sort", selectedSort),
        orderBy:
          selectedSort === "all"
            ? ""
            : getSortAndOrderVal("order", selectedSort),
        brands: selectedBrand || "",
        categories: selectedCategory || "",
        price: selectedPrice || "",
      };

      dispatch(commonActions.setLoading(true));

      const {
        data: { list, total },
      }: IProductList = await getProductListApi(config);
      dispatch(productActions.setTotalProductNum(total));

      //Using flex-wrap:wrap + center will result in last line's items being set in the center when there are only odd number of items.
      //To deal with that,we need to generate the number of items that fit the blank(say we have 1 item ,then we need to generate another 3 items if the screen width is greater than 1200px which we set 4 items per line)
      // use forEach to push the blank item into list.
      if (list.length % (isTargetWidth ? 3 : 4) !== 0) {
        [
          ...Array(
            (isTargetWidth ? 3 : 4) - (list.length % (isTargetWidth ? 3 : 4))
          ),
        ].forEach((_) => list.push({}));
      }

      dispatch(productActions.setProductList(list as IProduct[]));
      dispatch(commonActions.setLoading(false));
    } catch (error) {
      const err = error as AxiosError;
      dispatch(commonActions.setLoading(false));

      if (err.response && err.response.data)
        console.log((err.response.data as { msg: string }).msg);
    }
  };
};

export default getProductList;
