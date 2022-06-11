import React, { useState } from "react";
import styled from "styled-components";
import cl from "../constants/color/color";

import { popularProducts } from "../data/data";
import SingleProduct from "../components/SingleProduct";
import Select from "../components/Select";
import Filter from "../components/Filter";

const ProductList = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <Container onClick={() => setActive(!active)}>
      <Wrapper>
        <Top>
          <PageTitle>All Products</PageTitle>
          <Func>
            <Select active={active} handleActive={handleActive} />
            <Filter></Filter>
          </Func>
        </Top>
        <ItemContainer>
          {popularProducts.map((item) => (
            <ItemBox>
              <SingleProduct item={item} />
            </ItemBox>
          ))}
        </ItemContainer>
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
  background: coral;
`;
const Top = styled.div`
  display: flex;
  @media (max-width: 700px) {
    display: block;
  }
  justify-content: space-between;
  align-items: center;
  max-width: 1150px;
  background: red;
  margin: 0 auto 2rem auto;
  padding: 2rem;
`;
const PageTitle = styled.h1`
  /* margin-bottom: 2rem;
  padding-left: 7.5rem; */
`;
const Func = styled.div`
  display: flex;
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
