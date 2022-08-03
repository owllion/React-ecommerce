import { AxiosRequestConfig, AxiosError } from "axios";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import { ThunkAction } from "redux-thunk";
import qs from "qs";
import { IProductList } from "../../../interface/product.interface";
import { getProductListApi } from "../../../api/product.api";
import { commonActions } from "../../slice/Common.slice";

const getSortAndOrderVal = (type: string) => {
  return type === "sort"
    ? selectedVal.substring(0, selectedVal.indexOf("-"))
    : selectedVal.substring(selectedVal.indexOf("-") + 1);
};

export const getProductList = (
  params: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const state = getState().product;
    const { selectedBrand, selectedCategory, selectedPrice } = state;
    try {
      let config: AxiosRequestConfig = {
        params: {
          page: curPage || 1,
          keyword: keyword || "",
          sortBy: getSortAndOrderVal("sort"),
          orderBy: selectedVal === "all" ? "" : getSortAndOrderVal("order"),
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

      setTotalCount(count?.[0]?.totalDoc);

      if (list.length % (isTargetWidth ? 3 : 4) !== 0) {
        [
          ...Array(
            (isTargetWidth ? 3 : 4) - (list.length % (isTargetWidth ? 3 : 4))
          ),
        ].forEach((_, i) => list.push({}));
      }

      //   console.log("這是拿到的list", list);
      setProductList(list);
      setCurPage(1);
      dispatch(commonActions.setLoading(false));
    } catch (error) {
      const err = error as AxiosError;
      dispatch(commonActions.setLoading(false));

      if (err.response && err.response.data)
        console.log((err.response.data as { msg: string }).msg);
    }
  };
};
