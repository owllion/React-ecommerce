import React, { useState, useEffect } from "react";
import { AxiosRequestConfig } from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import qs from "qs";
import { useAppSelector, useAppDispatch } from "../store/hooks";

import cl from "../constants/color/color";
import { productListMotion } from "../lib/motion";

import { sortOptions } from "../data/sortOptions";
import { popularProducts } from "../data/data";

import SingleProduct from "../components/Product/SingleProduct";
import Select from "../components/Product/Select";
import Filter from "../components/Product/Filter";
import Pagination from "../components/Common/Pagination";
import { productActions } from "../store/slice/Product.slice";
import { getProductListApi } from "../api/product.api";
import { IProduct } from "../interface/product.interface";
interface IProductList {
  data: { productList: [{ count: [{ totalDoc: number }]; list: IProduct[] }] };
}

const ProductList = () => {
  const { selectedBrand, selectedPrice, selectedCategory } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();
  const [filterV, setFilter] = useState(1);

  const [activeSort, setActiveSort] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [selectedVal, setSelectedVal] = useState("");
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [curPage, setCurPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

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
      setSelectedName(params.name);
      setSelectedVal(params.val);
    }
    handleActiveSort();
  };

  const handlePageClick = (event: { selected: number }) => {
    setCurPage(event.selected);
    const newOffset = (event.selected * 10) % productList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSortAndOrderVal = (type: string) => {
    return type === "sort"
      ? selectedVal.substring(0, selectedVal.indexOf("-"))
      : selectedVal.substring(selectedVal.indexOf("-") + 1);
  };

  const getProductList = async () => {
    let config: AxiosRequestConfig = {
      params: {
        page: curPage || 1,
        keyword: "",
        sortBy: getSortAndOrderVal("sort"),
        orderBy: getSortAndOrderVal("order"),
        brands: selectedBrand || "",
        categories: selectedCategory || "",
        price: selectedPrice || "",
      },
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    };
    try {
      const {
        data: { productList },
      }: IProductList = await getProductListApi(config);
      console.log({ productList });
      const { count, list } = productList?.[0];
      setTotalCount(count?.[0].totalDoc);
      setProductList(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductList();
  }, [selectedCategory, selectedBrand, selectedPrice, selectedVal, curPage]);

  useEffect(() => {
    dispatch(productActions.clearAllState());
    getProductList();
  }, []);

  return (
    <Container as={motion.div} {...productListMotion}>
      <Wrapper>
        <Top>
          <PageTitle>All Products</PageTitle>
          <Func>
            <Filter active={activeFilter} handleActive={handleActiveFilter} />
            <Select
              fullWidth={false}
              listData={sortOptions}
              selectedName={selectedName}
              selectedVal={selectedVal}
              active={activeSort}
              handleActive={handleActiveSort}
              handleSetSelected={handleSetSelected}
            />
          </Func>
        </Top>
        <ItemContainer as={motion.div} layout>
          {productList.map((item) => (
            <ItemBox key={item.productId}>
              <SingleProduct item={item} />
            </ItemBox>
          ))}
        </ItemContainer>
        <Pagination
          itemsPerPage={10}
          itemsLength={totalCount}
          handlePageClick={handlePageClick}
        />
      </Wrapper>
    </Container>
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
export default ProductList;
