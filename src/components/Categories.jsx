import React from "react";
import styled from "styled-components";
import { categories } from "../data/data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  padding: 2rem;
  @media (max-width: 980px) {
    display: block;
  }
  @media (max-width: 450px) {
    padding: 0;
  }
`;
export default Categories;
