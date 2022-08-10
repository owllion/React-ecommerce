import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import cl from "../constants/color/color";
import PlusMinusBtn from "../components/Common/PlusMinusBtn";
import AddToCartBtn from "../components/Product/AddToCartBtn";
import ReviewSection from "../components/Product/Review/ReviewSection";
import { getProductDetailApi } from "../api/product.api";
import { IProduct } from "../interface/product.interface";
import { productActions } from "../store/slice/Product.slice";
import { commonActions } from "../store/slice/Common.slice";

const sizeList = ["XS", "S", "M", "L", "XL"];
const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.common);
  const { id } = useParams();

  const [mainImg, setMainImg] = useState("");
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [detail, setDetail] = useState<IProduct>({
    _id: "",
    productId: "",
    productName: "",
    imageList: [],
    price: 0,
    salePrice: 0,
    brand: "",
    category: "",
    description: "",
    stock: 0,
    availability: false,
    sales: 0,
    size: "",
    reviews: [],
  });

  const getDetail = async () => {
    dispatch(commonActions.setLoading(true));
    try {
      const {
        data: { productDetail },
      } = await getProductDetailApi({ productId: id });

      setDetail(productDetail);
      dispatch(productActions.setProductReviews(productDetail.reviews));
      setMainImg(productDetail.imageList[0]);
      dispatch(productActions.setProductId(productDetail._id));
      dispatch(commonActions.setLoading(false));
    } catch (error) {
      dispatch(commonActions.setLoading(false));
      console.log(error);
    }
  };
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <Container>
      <Wrapper>
        <TopSection>
          <Left>
            <MainImgBox>
              {isLoading && !mainImg ? (
                <Skeleton height={500} />
              ) : (
                <MainImg src={mainImg} />
              )}
            </MainImgBox>
            <Thumbs>
              {detail.imageList.map((url, index) => (
                <Thumb onClick={() => setMainImg(url)} key={index}>
                  <ThumbImg src={url} />
                </Thumb>
              ))}
            </Thumbs>
          </Left>
          <Right>
            <Name>{isLoading ? <Skeleton /> : detail.productName}</Name>
            <Price> {isLoading ? <Skeleton /> : `$${detail.price}`} </Price>
            <Spacer />
            <ColorContainer>
              <ColorTitle>Color</ColorTitle>
              <SelectedColor>Blue</SelectedColor>
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
                {isLoading ? <Skeleton count={6} /> : detail.description}
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
  width: 30%;

  margin-top: 5%;
  background: ${cl.white};
`;
const ThumbImg = styled.img`
  width: 100%;
  height: 100%;
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
    font-size: 3rem;
  }

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
const SizeItem = styled.li<{ nowSelected: number; nowIndex: number }>`
  margin-right: 1rem;
  @media (max-width: 500px) {
    margin-right: 0.4rem;
  }
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 38px;
  text-align: center;
  font-weight: 800;
  font-size: 0.9rem;
  background: ${cl.plusGray};
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
