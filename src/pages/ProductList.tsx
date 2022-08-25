import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation, useSearchParams } from "react-router-dom";
import { AnyAction } from "redux";

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
import { IProduct } from "../interface/product.interface";
import { useUpdateEffect } from "../hooks/useUpdateEffect";
import { useMatchMedia } from "../hooks/useMatchMedia";

const ProductList = () => {
  const {
    totalNum,
    productList,
    selectedSort,
    selectedBrand,
    selectedPrice,
    selectedCategory,
  } = useAppSelector((state) => state.product);
  const { isLoading } = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState("");
  const [searchParams] = useSearchParams();
  const [activeSort, setActiveSort] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [currentList, setCurrentList] = useState("");
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
    setCurrentList("api");

    dispatch(productActions.setCurPage(event.selected + 1));
    dispatch(getProductList("") as unknown as AnyAction);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isTargetWidth = useMatchMedia("1200px");

  useUpdateEffect(() => {
    setCurrentList("api");

    dispatch(productActions.setCurPage(1));
    dispatch(getProductList("") as unknown as AnyAction);
  }, [selectedCategory, selectedBrand, selectedPrice]);

  useUpdateEffect(() => {
    setCurrentList("api");
    dispatch(getProductList("") as unknown as AnyAction);
  }, [selectedSort, isTargetWidth]);

  useEffect(() => {
    setCurrentList("api");

    const currentParams = Object.fromEntries([...searchParams]);
    dispatch(productActions.clearAllState());

    currentParams.category &&
      dispatch(productActions.setCategory(currentParams.category));

    dispatch(productActions.setCurPage(1));

    dispatch(getProductList("") as unknown as AnyAction);
  }, [searchParams]);
  const filteredList = () =>
    productList.filter((item) =>
      keyword
        ? item.productName?.toLowerCase().includes(keyword.toLowerCase())
        : item
    );

  return (
    <>
      <Container as={motion.div} {...productListMotion}>
        <Wrapper>
          <Top>
            <PageTitle>All Products</PageTitle>
            <input
              type="text"
              onChange={(e) => {
                if (currentList !== "search") setCurrentList("search");
                setKeyword(e.target.value);
              }}
            />
            Search
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

          {productList.length > 0 && (
            <>
              <ItemContainer as={motion.div} layout>
                {(currentList === "api"
                  ? productList
                  : (filteredList() as unknown as Array<
                      IProduct | Partial<IProduct>
                    >)
                ).map((item) => (
                  <ItemBox key={item.productId}>
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
                itemsLength={totalNum}
                handlePageClick={handlePageClick}
              />
            </>
          )}

          {!isLoading && productList.length === 0 && (
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
  @media (max-width: 950px) {
    display: block;
  }
  justify-content: space-between;
  align-items: center;
  max-width: 1150px;
  margin: 0 auto 2rem auto;
  padding: 2rem;
`;
const PageTitle = styled.h1``;
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
export const Spacer = styled.i.attrs({
  "aria-hidden": "true",
})`
  min-width: 260px;
`;

export default ProductList;
