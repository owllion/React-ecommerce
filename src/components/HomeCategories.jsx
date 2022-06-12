import React from "react";
import styled from "styled-components";
import { categories } from "../data/data";
import HomeCategoryItem from "./HomeCategoryItem";
import { motion } from "framer-motion";

const HomeCategories = () => {
  return (
    <Container>
      {/* as={motion.div}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }} */}

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
