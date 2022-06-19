import React, { useState } from "react";
import styled from "styled-components";
import cl from "../constants/color/color";

import { motion } from "framer-motion";
import { productListMotion } from "../lib/motion";

import { popularProducts } from "../data/data";
import SingleProduct from "../components/SingleProduct";
import Select from "../components/Select";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import { sortOptions } from "../data/sortOptions";

const ProductList = () => {
  const [activeSort, setActiveSort] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [selectedVal, setSelectedVal] = useState("");

  const handleActiveSort = (params) => {
    if (activeFilter) setActiveFilter(false);
    setActiveSort(!activeSort);
    if (params) {
      setSelectedName(params.name);
      setSelectedVal(params.val);
    }
  };
  const handleActiveFilter = (e) => {
    if (activeSort) setActiveSort(false);
    setActiveFilter(!activeFilter);
  };

  return (
    <Container as={motion.div} {...productListMotion}>
      <Wrapper>
        <Top>
          <PageTitle>All Products</PageTitle>
          <Func>
            <Filter active={activeFilter} handleActive={handleActiveFilter} />
            <Select
              w_full={false}
              listData={sortOptions}
              selectedName={selectedName}
              selectedVal={selectedVal}
              active={activeSort}
              handleActive={handleActiveSort}
            />
          </Func>
        </Top>
        <ItemContainer>
          {popularProducts.map((item) => (
            <ItemBox>
              <SingleProduct item={item} />
            </ItemBox>
          ))}
        </ItemContainer>
        <Pagination itemsPerPage={4} />
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
