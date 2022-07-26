import React from "react";

import styled from "styled-components";
import ProductCarousel from "../../components/Product/ProductCarousel";

const HomeProducts = () => {
  return (
    <Container>
      <ProductCarousel />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  padding: 1.2rem 2.4rem;
  flex-wrap: wrap;
`;
export default HomeProducts;
