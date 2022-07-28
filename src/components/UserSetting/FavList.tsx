import React from "react";
import styled from "styled-components";

import SingleProduct from "../Product/SingleProduct";
import SectionTitle from "./SectionTitle";
const FavList = () => {
  const test = {
    img: "https://i.imgur.com/BSDsZcH.png",
    name: "my Jacket",
    price: "$199.00",
  };
  return (
    <>
      <Container>
        <SectionTitle title="Favorite" />
        <Wrapper>
          <SingleBox>
            <SingleProduct item={test} />
          </SingleBox>
          <SingleBox>
            <SingleProduct item={test} />
          </SingleBox>
          <SingleBox>
            <SingleProduct item={test} />
          </SingleBox>
          <SingleBox>
            <SingleProduct item={test} />
          </SingleBox>
          <SingleBox>
            <SingleProduct item={test} />
          </SingleBox>
          <SingleBox>
            <SingleProduct item={test} />
          </SingleBox>
          <SingleBox>
            <SingleProduct item={test} />
          </SingleBox>
          <SingleBox>
            <SingleProduct item={test} />
          </SingleBox>
          <SingleBox>
            <SingleProduct item={test} />
          </SingleBox>
          <SingleBox>
            <SingleProduct item={test} />
          </SingleBox>
          <SingleBox>
            <SingleProduct item={test} />
          </SingleBox>
          <SingleBox>
            <SingleProduct item={test} />
          </SingleBox>
        </Wrapper>
      </Container>
    </>
  );
};
const Container = styled.section`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 5px solid transparent;
    background-clip: content-box;
    background-color: #8070d4;
  }
  @media (max-width: 767px) {
    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }
  }
  height: 500px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  @media (max-width: 380px) {
    padding: 0;
  }
`;
const SingleBox = styled.div`
  flex: 1;
`;
export default FavList;