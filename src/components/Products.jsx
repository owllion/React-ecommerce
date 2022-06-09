import React from "react";

import styled from "styled-components";
import ProductCarousel from "./ProductCarousel";

const Products = () => {
  return (
    <Container>
      <ProductCarousel />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 1.2rem 2.4rem;
  flex-wrap: wrap;
`;
export default Products;
