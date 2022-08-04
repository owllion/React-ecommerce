import React from "react";

import Hero from "../components/Home/Hero";
import HomeCategories from "../components/Home/HomeCategories";
import HomeProducts from "../components/Home/HomeProducts";
import Newsletter from "../components/Home/Newsletter";
import Sponsors from "../components/Home/Sponsors";
import getProductList from "../store/actions/product/getProductList.action";
import qs from "qs";
import { getProductListApi } from "../api/product.api";
const Home = () => {
  const test = async () => {
    try {
      //@ts-ignore
      let config: AxiosRequestConfig = {
        params: {
          page: 1,
          keyword: "shirt",
        },
        paramsSerializer: (params: any) =>
          qs.stringify(params, { arrayFormat: "repeat" }),
      };

      const {
        data: { productList },
      } = await getProductListApi(config);
      console.log(productList);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    test();
    console.log("fjfijfi");
    getProductList("coat");
  }, []);
  return (
    <>
      <Hero />
      <HomeCategories />
      <HomeProducts />
      <Newsletter />
      <Sponsors />
    </>
  );
};

export default Home;
