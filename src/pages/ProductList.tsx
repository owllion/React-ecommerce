import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
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

const ProductList = () => {
  const {
    curPage,
    totalNum,
    productList,
    selectedSort,
    isTargetWidth,
    selectedBrand,
    selectedPrice,
    selectedCategory,
  } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [searchParams] = useSearchParams();
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
    //This will execute on the first render
    dispatch(getProductList(keyword) as unknown as AnyAction);
    const currentParams = Object.fromEntries([...searchParams]);

    console.log("useEffect", currentParams);

    dispatch(productActions.clearAllState());

    currentParams.keyword && setKeyword(currentParams.keyword);
    currentParams.category &&
      dispatch(productActions.setCategory(currentParams.category));
    dispatch(productActions.setCurPage(1));
  }, [searchParams]);

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
const Spacer = styled.i.attrs({
  "aria-hidden": "true",
})`
  min-width: 260px;
`;

export default ProductList;
