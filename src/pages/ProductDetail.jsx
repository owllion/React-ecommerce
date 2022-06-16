import React, { useState } from "react";

import styled, { css } from "styled-components";
import cl from "../constants/color/color";

import PlusMinusBtn from "../components/PlusMinusBtn";
import AddToCartBtn from "../components/AddToCartBtn";
import ReviewSection from "../components/ReviewSection";

const imgList = ["t1", "t2", "t3", "t4"];
const sizeList = ["XS", "S", "M", "L", "XL"];

const ProductDetail = () => {
  const [mainImg, setMainImg] = useState("t1");
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  return (
    <Container>
      <Wrapper>
        <TopSection>
          <Left>
            <MainImgBox>
              <MainImg src={require(`../assets/temp/${mainImg}.jpg`)} />
            </MainImgBox>
            <Thumbs>
              {imgList.map((img, index) => (
                <Thumb onClick={() => setMainImg(img)} key={index}>
                  <ThumbImg src={require(`../assets/temp/${img}.jpg`)} />
                </Thumb>
              ))}
            </Thumbs>
          </Left>
          <Right>
            <Name>RAVEN JACKET</Name>
            <Price>$105.99</Price>
            <Spacer />
            <ColorContainer>
              <ColorTitle>Color</ColorTitle>
              <SelectedColor>Black</SelectedColor>
            </ColorContainer>
            <SizeContainer>
              <SizeTitle>Size</SizeTitle>
              <SizeItems>
                {sizeList.map((size, index) => (
                  <SizeItem
                    key={index}
                    onClick={() => setSelectedSizeIndex(index)}
                    nowIndex={index}
                    nowSelected={selectedSizeIndex}
                  >
                    {size}
                  </SizeItem>
                ))}
              </SizeItems>
            </SizeContainer>
            <BtnBox>
              <PlusMinusBtnBox>
                <PlusMinusBtn />
              </PlusMinusBtnBox>
              <AddToCartBtnBox>
                <AddToCartBtn />
              </AddToCartBtnBox>
            </BtnBox>
            <DetailSection>
              <Detail>
                The HANSON mid-length wool coat is a must-have item every autumn
                and winter. It follows the classic, and the wool blend is
                slightly narrower. It is a single-breasted design item with a
                unique ALLSAINTS brand tone.
              </Detail>
            </DetailSection>
          </Right>
        </TopSection>
        <ReviewSection />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  @media (min-width: 1000px) {
    padding: 10rem 5rem;
  }
  padding: 5rem 1rem;
`;
const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  /* background-color: coral; */
  display: flex;
  flex-direction: column;
`;
const TopSection = styled.section`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  padding-bottom: 8rem;
  border-bottom: 1px solid ${cl.darkenGray};
`;
const Left = styled.div`
  flex: 1;
  width: 100%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const MainImgBox = styled.div`
  width: 100%;
`;
const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Thumbs = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Thumb = styled.li`
  width: 23%;
  margin-top: 5%;
  background: ${cl.white};
`;
const ThumbImg = styled.img`
  width: 100%;
  object-fit: contain;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  margin-top: 2rem;
  @media (min-width: 1000px) {
    margin-left: 3rem;
    padding: 0 2rem;
    margin-top: 0;
  }
`;
const Spacer = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 1rem;
  border: 1px solid ${cl.lightGray};
`;
const Name = styled.h2`
  @media (min-width: 640px) {
    font-size: 4rem;
  }
  /* @media (min-width: 460px) {
    font-size: 2.5rem;
  } */
  font-size: 2rem;
`;
const Price = styled.p`
  @media (min-width: 1000px) {
    font-size: 2rem;
  }
  font-size: 1.4rem;
`;
const ColorContainer = styled.div`
  padding: 0.4rem 0.4rem 0.4rem 0;
`;
const ColorTitle = styled.span`
  font-size: 1.2rem;
  width: 60px;
`;
const SelectedColor = styled.span`
  font-weight: 600;
  padding-left: 0.8rem;
`;
const SizeContainer = styled.div`
  padding: 0.4rem 0.4rem 0.4rem 0;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const SizeTitle = styled.span`
  font-size: 1.2rem;
  padding-right: 1.7rem;
  width: 60px;
  @media (max-width: 767px) {
    padding-bottom: 0.5rem;
  }
`;
const SizeItems = styled.ul`
  display: flex;
`;
const SizeItem = styled.li`
  margin-right: 1rem;
  @media (max-width: 500px) {
    margin-right: 0.4rem;
  }
  border: 1px solid ${cl.dark};
  border-radius: min(calc(1rem * (16 / 16 + 0.333 * 4)), 4px);
  padding: 0.5rem 1rem;
  ${({ nowSelected, nowIndex }) =>
    nowSelected === nowIndex &&
    css`
      background: ${cl.dark};
      color: ${cl.white};
    `};
`;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem 0;
`;
const PlusMinusBtnBox = styled.div`
  margin-right: 2rem;
`;
const AddToCartBtnBox = styled.div``;
const DetailSection = styled.div``;
const Detail = styled.p``;

export default ProductDetail;
