import React, { useState } from "react";

import styled from "styled-components";
import cl from "../constants/color/color";

import PlusMinusBtn from "../components/PlusMinusBtn";
import AddToCartBtn from "../components/AddToCartBtn";
import ReviewSection from "../components/ReviewSection";

const imgList = ["t1", "t2", "t3", "t4"];
const ProductDetail = () => {
  const [mainImg, setMainImg] = useState("t1");
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
            <Color>
              <ColorTitle>Color</ColorTitle>
              <SelectedColor>Black</SelectedColor>
            </Color>
            <Size>
              <SizeTitle>Size</SizeTitle>
              <SelectedSize>XL</SelectedSize>
            </Size>
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
const Color = styled.div`
  padding: 0.4rem 0.4rem 0.4rem 0;
`;
const ColorTitle = styled.span`
  font-size: 1.2rem;
`;
const SelectedColor = styled.span`
  font-weight: 600;
  padding-left: 0.8rem;
`;
const Size = styled.div`
  padding: 0.4rem 0.4rem 0.4rem 0;
`;
const SizeTitle = styled.span`
  font-size: 1.2rem;
`;
const SelectedSize = styled.span`
  font-weight: 600;
  padding-left: 0.8rem;
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
