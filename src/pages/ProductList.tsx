import React, { useState, useEffect } from "react";
import { AxiosRequestConfig } from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import qs from "qs";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { AnyAction } from "redux";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import cl from "../constants/color/color";
import { productListMotion, productItemMotion } from "../lib/motion";
import { sortOptions } from "../data/sortOptions";

import SingleProduct from "../components/Product/SingleProduct";
import Select from "../components/Product/Select";
import Filter from "../components/Product/Filter";
import Pagination from "../components/Common/Pagination";
import Lottie from "../components/Common/Lottie";

import { productActions } from "../store/slice/Product.slice";
import { getProductListApi } from "../api/product.api";
import { IProduct } from "../interface/product.interface";
import getProductList from "../store/actions/product/getProductList.action";
interface ILocation {
  state: {
    keyword: string;
  };
}
const ProductList = () => {
  const {
    totalNum,
    productList,
    selectedSort,
    curPage,
    isTargetWidth,
    selectedCategory,
    selectedBrand,
    selectedPrice,
  } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [searchParams] = useSearchParams();

  // const params = useParams<{
  //   category: string;
  // }>();
  // console.log(params.category);

  const [activeSort, setActiveSort] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [sortBy, setSortBy] = useState("");
  // const [selectedVal, setSelectedVal] = useState("");
  // const [productList, setProductList] = useState<
  //   (IProduct | Partial<IProduct>)[]
  // >([]);
  // Partial because there might be some <Spacer/> which have no data.

  // const [curPage, setCurPage] = useState(1);
  // const [totalCount, setTotalCount] = useState(0);
  // const [isTargetWidth, setTargetWidth] = useState(false);

  const handleActiveSort = () => {
    if (activeFilter) setActiveFilter(false);
    setActiveSort(!activeSort);
  };
  const handleActiveFilter = () => {
    if (activeSort) setActiveSort(false);
    setActiveFilter(!activeFilter);
  };
  const handleSetSelected = (params: { name: string; val: string }) => {
    if (params.name && params.val) {
      setSortBy(params.name);
      dispatch(productActions.setSort(params.val));
    }
    handleActiveSort();
  };

  const handlePageClick = (event: { selected: number }) => {
    dispatch(productActions.setCurPage(event.selected + 1));

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (id: string | undefined) => {
    //can be undefined coz  <Spacer/> have no data.
    navigate(`/product-detail/${id}`);
  };

  // const getProductList = async () => {
  //   let config: AxiosRequestConfig = {
  //     params: {
  //       page: curPage || 1,
  //       keyword: keyword || "",
  //       sortBy: getSortAndOrderVal("sort"),
  //       orderBy: selectedVal === "all" ? "" : getSortAndOrderVal("order"),
  //       brands: selectedBrand || "",
  //       categories: selectedCategory || "",
  //       price: selectedPrice || "",
  //     },
  //     paramsSerializer: (params) =>
  //       qs.stringify(params, { arrayFormat: "repeat" }),
  //   };
  //   console.log("來看看config", { config });
  //   try {
  //     const {
  //       data: { productList },
  //     }: IProductList = await getProductListApi(config);

  //     const { count, list } = productList?.[0];

  //     setTotalCount(count?.[0]?.totalDoc);

  //     if (list.length % (isTargetWidth ? 3 : 4) !== 0) {
  //       [
  //         ...Array(
  //           (isTargetWidth ? 3 : 4) - (list.length % (isTargetWidth ? 3 : 4))
  //         ),
  //       ].forEach((_, i) => list.push({}));
  //     }

  //     console.log("這是拿到的list", list);
  //     setProductList(list);
  //     setCurPage(1);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const isPadWidth = window.matchMedia("(max-width: 1200px)");

  useEffect(() => {
    isPadWidth.addEventListener("change", (event: MediaQueryListEvent) => {
      dispatch(productActions.setIsTargetWidth(event.matches));
    });
    return () =>
      isPadWidth.removeEventListener("change", (event: MediaQueryListEvent) => {
        dispatch(productActions.setIsTargetWidth(event.matches));
      });
  });

  useEffect(() => {
    dispatch(productActions.setCurPage(1));
    dispatch(getProductList(keyword) as unknown as AnyAction);
  }, [selectedCategory, selectedBrand, selectedPrice]);

  useEffect(() => {
    dispatch(getProductList(keyword) as unknown as AnyAction);
  }, [curPage, selectedSort, isTargetWidth]);

  useEffect(() => {
    dispatch(getProductList(keyword) as unknown as AnyAction);
    const currentParams = Object.fromEntries([...searchParams]);

    console.log("useEffect", currentParams);

    dispatch(productActions.clearAllState());

    currentParams.keyword && setKeyword(currentParams.keyword);
    currentParams.category &&
      dispatch(productActions.setCategory(currentParams.category));
    dispatch(productActions.setCurPage(1));
    console.log("這是searchParams");
  }, [searchParams]);

  // useEffect(() => {
  //   getProductList(keyword);
  //   console.log("一進來的呼叫 []");
  // }, []);

  return (
    <>
      <Container as={motion.div} {...productListMotion}>
        <Wrapper>
          <Top>
            <PageTitle>All Products</PageTitle>
            <Func>
              <Filter active={activeFilter} handleActive={handleActiveFilter} />
              <Select
                fullWidth={false}
                listData={sortOptions}
                selectedName={sortBy}
                selectedVal={selectedSort}
                active={activeSort}
                handleActive={handleActiveSort}
                handleSetSelected={handleSetSelected}
              />
            </Func>
          </Top>
          {productList.length > 0 ? (
            <>
              <ItemContainer as={motion.div} layout>
                {productList.map((item, index) => (
                  <ItemBox
                    key={item.productId}
                    onClick={() => handleNavigate(item.productId)}
                  >
                    {Object.keys(item).length > 0 ? (
                      <SingleProduct item={item as IProduct} />
                    ) : (
                      <Spacer
                        key={index}
                        as={motion.div}
                        layout
                        {...productItemMotion}
                      />
                    )}
                  </ItemBox>
                ))}
              </ItemContainer>

              <Pagination
                itemsPerPage={12}
                itemsLength={totalNum}
                handlePageClick={handlePageClick}
              />
            </>
          ) : (
            <Lottie jsonName={"productNotFound"} />
          )}
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 10rem 0;
  border-bottom: 1px solid ${cl.mainGray};
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  /* background: coral; */
`;
const Top = styled.div`
  display: flex;
  @media (max-width: 950px) {
    display: block;
  }
  justify-content: space-between;
  align-items: center;
  max-width: 1150px;
  /* background: red; */
  margin: 0 auto 2rem auto;
  padding: 2rem;
`;
const PageTitle = styled.h1`
  /* margin-bottom: 2rem;
  padding-left: 7.5rem; */
`;
const Func = styled.div`
  display: flex;
  @media (max-width: 950px) {
    display: block;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;
const ItemBox = styled.div`
  flex-basis: 20%;
`;
const Spacer = styled.i.attrs({
  "aria-hidden": "true",
})`
  min-width: 260px;
`;

export default ProductList;
