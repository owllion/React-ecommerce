import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AnyAction } from "redux";
import { useLocation } from "react-router-dom";

import cl from "../constants/color/color";
import { productListMotion, productItemMotion } from "../lib/motion";
import { sortOptions } from "../data/sortOptions";

import SingleProduct from "../components/Product/SingleProduct";
import Select from "../components/Product/Select";
import Filter from "../components/Product/Filter";
import Pagination from "../components/Common/Pagination";
import Lottie from "../components/Common/Lottie";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { productActions } from "../store/slice/Product.slice";
import getProductList from "../store/actions/product/getProductList.action";

import { useUpdateEffect } from "../hooks/useUpdateEffect";
import { useMatchMedia } from "../hooks/useMatchMedia";
import { useDebounce } from "../hooks/useDebounce";

import { IProduct } from "../interface/product.interface";
import SearchBar from "../components/Product/SearchBar";

const ProductList = () => {
  const {
    totalNum,
    productList,
    selectedSort,
    selectedBrand,
    selectedPrice,
    selectedCategory,
  } = useAppSelector((state) => state.product || {});

  const { isLoading } = useAppSelector((state) => state.common || {});

  const dispatch = useAppDispatch();

  const location = useLocation();
  const category = (location?.state as { category: string })?.category;

  const [filteredList, setFilteredList] =
    useState<(IProduct | Partial<IProduct>)[]>();
  const [filteredTotalNum, setFilteredTotalNum] = useState(0);
  const [keyword, setKeyword] = useState("");

  const [activeSort, setActiveSort] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const handleActiveSort = () => {
    if (activeFilter) setActiveFilter(false);
    setActiveSort(!activeSort);
  };
  const handleActiveFilter = () => {
    if (activeSort) setActiveSort(false);
    setActiveFilter(!activeFilter);
  };
  const handleGetKeyword = (value: string | undefined) => {
    setKeyword(value || "");
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
    dispatch(getProductList(keyword) as unknown as AnyAction);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isTargetWidth = useMatchMedia("1200px");

  useUpdateEffect(() => {
    dispatch(productActions.setCurPage(1));

    dispatch(getProductList(keyword) as unknown as AnyAction);
  }, [selectedSort, isTargetWidth]);

  // useUpdateEffect would cause problem if there is any setMethod in it.
  useEffect(() => {
    dispatch(productActions.setCurPage(1));

    setFilteredList(productList);
  }, [productList]);

  useEffect(() => {
    setFilteredTotalNum(totalNum);
  }, [totalNum]);

  useEffect(() => {
    const getData = async () => {
      dispatch(productActions.clearAllState());
      dispatch(productActions.setCurPage(1));
      dispatch(productActions.setIsTargetWidth(isTargetWidth));

      category && dispatch(productActions.setCategory(category));
      await dispatch(getProductList("" || category) as unknown as AnyAction);
    };
    getData();
  }, []);

  useUpdateEffect(() => {
    dispatch(productActions.setCurPage(1));
    dispatch(getProductList(keyword) as unknown as AnyAction);
  }, [selectedCategory, selectedBrand, selectedPrice]);

  return (
    <>
      <Container as={motion.div} {...productListMotion}>
        <Wrapper>
          <Top>
            <PageTitle>All Products</PageTitle>
            <Func>
              <SearchBar handleGetKeyword={handleGetKeyword} />
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

          {filteredList!?.length > 0 && (
            <>
              <ItemContainer as={motion.div} layout>
                {filteredList?.map((item) => (
                  <ItemBox key={item.id}>
                    {Object.keys(item).length > 0 ? (
                      <SingleProduct item={item as IProduct} />
                    ) : (
                      <Spacer as={motion.div} layout {...productItemMotion} />
                    )}
                  </ItemBox>
                ))}
              </ItemContainer>

              <Pagination
                itemsPerPage={12}
                itemsLength={filteredTotalNum}
                handlePageClick={handlePageClick}
              />
            </>
          )}

          {!isLoading && filteredList?.length === 0 && (
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
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 1150px;
  margin: 0 auto 2rem auto;
  padding: 1.7rem;
  @media (max-width: 950px) {
    display: block;
    padding: 2rem;
  }
`;
const PageTitle = styled.h1`
  padding-bottom: 1.5rem;
`;
const Func = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 950px) {
    display: block;
    margin-top: 2rem;
  }
`;
const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
export const Spacer = styled.i.attrs({
  "aria-hidden": "true",
})`
  min-width: 260px;
`;

export default ProductList;
