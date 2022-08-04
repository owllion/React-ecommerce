import { AxiosRequestConfig, AxiosError } from "axios";
// import { AnyAction } from "redux";
import { AppThunk } from "../../store";
// import { ThunkAction } from "redux-thunk";
import qs from "qs";
import { IProductList, IProduct } from "../../../interface/product.interface";
import { getProductListApi } from "../../../api/product.api";
import { commonActions } from "../../slice/Common.slice";
import { productActions } from "../../slice/Product.slice";

const getProductList = (keyword: string): AppThunk => {
  return async (dispatch, getState) => {
    try {
      console.log("有被呼叫嗎");
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
      let config: AxiosRequestConfig = {
        params: {
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
        },
        paramsSerializer: (params) =>
          qs.stringify(params, { arrayFormat: "repeat" }),
      };

      dispatch(commonActions.setLoading(true));

      const {
        data: { productList },
      }: IProductList = await getProductListApi(config);

      const { count, list } = productList?.[0];
      dispatch(productActions.setTotalProductNum(count?.[0]?.totalDoc));

      if (list.length % (isTargetWidth ? 3 : 4) !== 0) {
        [
          ...Array(
            (isTargetWidth ? 3 : 4) - (list.length % (isTargetWidth ? 3 : 4))
          ),
        ].forEach((_, i) => list.push({}));
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
