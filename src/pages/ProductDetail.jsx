import React from "react";

import styled from "styled-components";
import cl from "../constants/color/color";

const imgList = ["t1", "t2", "t3", "t4"];
const ProductDetail = () => {
  return (
    <Container>
      <Wrapper>
        <TopSection>
          <Left>
            <MainImgBox>
              <MainImg src={require(`../assets/temp/${imgList[0]}.jpg`)} />
            </MainImgBox>
            <Thumbs>
              {imgList.map((img, index) => (
                <Thumb>
                  <ThumbImg src={require(`../assets/temp/${img}.jpg`)} />
                </Thumb>
              ))}
            </Thumbs>
          </Left>
          <Right>
            <Name>RAVEN JACKET</Name>
            <Price>$105.99</Price>
            <Color>
              Color:<SelectedColor>Black</SelectedColor>
            </Color>
            <Size>
              Size: <SelectedSize>XL</SelectedSize>
            </Size>
            <Counter>counter要另外抓出去做</Counter>
            <ADdToCartBtn>家道購物車按鈕也是</ADdToCartBtn>
            <DetailSection>
              <Detail>Detail!!!!</Detail>
            </DetailSection>
          </Right>
        </TopSection>
        <ReviewSection>Review</ReviewSection>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  @media (min-width: 1000px) {
    padding: 10rem 5rem;
  }
  padding: 5rem 1rem;

  border-bottom: 1px solid ${cl.mainGray};
`;
const Wrapper = styled.div`
  max-width: 1000px;
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
`;
const Left = styled.div`
  width: 350px;
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
  margin-top: 2rem;
  @media (min-width: 1000px) {
    margin-left: 3rem;
    padding: 0 2rem;
  }
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
  font-size: 2rem;
`;
const Color = styled.div``;
const SelectedColor = styled.span`
  font-weight: 600;
  padding-left: 0.8rem;
`;
const Size = styled.div``;
const SelectedSize = styled.span`
  font-weight: 600;
  padding-left: 0.8rem;
`;
const Counter = styled.div``;
const ADdToCartBtn = styled.button``;
const DetailSection = styled.div``;
const Detail = styled.p``;

const ReviewSection = styled.section``;

export default ProductDetail;
