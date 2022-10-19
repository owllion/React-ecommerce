import React from "react";
import styled from "styled-components";
import { categories } from "../../data/data";
import HomeCategoryItem from "./HomeCategoryItem";

const HomeCategories = () => {
  return (
    <Container>
      {categories.map((item, index) => (
        <HomeCategoryItem key={item.id} item={item} index={index} />
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
export default HomeCategories;
