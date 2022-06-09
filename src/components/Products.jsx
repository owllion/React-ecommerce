import React from "react";
import SingleProduct from "./SingleProduct";
import styled from "styled-components";
import { popularProducts } from "../data/data";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <SingleProduct key={item.id} item={item} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 1.2rem;
  flex-wrap: wrap;
`;
export default Products;
