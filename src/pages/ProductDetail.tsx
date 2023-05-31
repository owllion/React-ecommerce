import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import cl from "../constants/color/color";
import PlusMinusBtn from "../components/Common/PlusMinusBtn";
import AddToCartBtn from "../components/Product/AddToCartBtn";
import ReviewSection from "../components/Product/Review/ReviewSection";
import { getProductDetailApi } from "../api/product.api";
import { IProduct } from "../interface/product.interface";
import { productActions } from "../store/slice/Product.slice";
import { commonActions } from "../store/slice/Common.slice";
import Heart from "../components/Product/Heart";
import SizeSelect from "../components/Product/SizeSelect";
import { useMatchMedia } from "../hooks/useMatchMedia";

const sizeList = ["XS", "S", "M", "L", "XL"];

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.common || {});
  const { id } = useParams();
  const isTargetWidth = useMatchMedia("400px");

  const [mainImg, setMainImg] = useState("");
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [detail, setDetail] = useState<IProduct>({
    id: "",
    product_name: "",
    images: [],
    price: 0,
    brand: "",
    category: "",
    description: "",
    stock: 0,
    availability: false,
    sales: 0,
    size: "",
    color: "",
    reviews: [],
    thumbnail: "",
    thumbnails: [],
  });
  const setSizeHandler = (index: number) => {
    setSelectedSizeIndex(index);
    dispatch(commonActions.resetItemQty());
  };

  const getDetail = async () => {
    dispatch(commonActions.setLoading(true));
    try {
      const { data } = await getProductDetailApi({ productId: id });

      setDetail(data);
      setMainImg(data.images[0].url);

      dispatch(productActions.setProductReviews(data.reviews));
      dispatch(productActions.setProductId(data.id));
      dispatch(commonActions.setLoading(false));
    } catch (error) {
      dispatch(commonActions.setLoading(false));
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };

  // const setMainImgHandler = (index: number) => {
  //   setMainImg(detail.images[index]);
  // };
  useEffect(() => {
    dispatch(commonActions.resetItemQty());
    getDetail();
  }, []);

  return (
    <Container>
      <Wrapper>
        <TopSection>
          <Left>
            <MainImgBox>
              {isLoading && !mainImg ? (
                <Skeleton height={isTargetWidth ? "420px" : "630px"} />
              ) : (
                <MainImg src={mainImg} width="420x" height="600px" />
              )}
            </MainImgBox>
            {/* <Thumbs>
              {detail.thumbnailList.map((url, index) => (
                <Thumb onClick={() => setMainImgHandler(index)} key={url}>
                  <ThumbImg src={url} />
                </Thumb>
              ))}
            </Thumbs> */}
            <Thumbs>
              {detail.images.map((img) => (
                <Thumb onClick={() => setMainImg(img.url)} key={img.url}>
                  <ThumbImg src={img.url} />
                </Thumb>
              ))}
            </Thumbs>
          </Left>
          <Right>
            <Name>{isLoading ? <Skeleton /> : detail.product_name}</Name>
            <Price> {isLoading ? <Skeleton /> : `$${detail.price}`} </Price>
            <Spacer />
            <ColorAndFavContainer>
              <InnerBox>
                <ColorTitle>Color</ColorTitle>
                <SelectedColor>{detail.color}</SelectedColor>
              </InnerBox>
              <InnerBox>
                <Heart item={detail} />
              </InnerBox>
            </ColorAndFavContainer>
            <SizeSelect
              isPopup={false}
              selectedSizeIndex={selectedSizeIndex}
              setSizeHandler={setSizeHandler}
            />
            <BtnBox>
              <PlusMinusBtnBox>
                <PlusMinusBtn />
              </PlusMinusBtnBox>
              <AddToCartBtnBox>
                <AddToCartBtn
                  id={detail.id}
                  size={sizeList[selectedSizeIndex]}
                />
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
  padding-bottom: 3rem;
  border-bottom: 1px solid ${cl.darkenGray};
`;
const Left = styled.div`
  flex: 1;
  width: 100%;
`;
const MainImgBox = styled.div`
  width: 100%;
  height: 600px;
`;
const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
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
const ColorAndFavContainer = styled.div`
  padding: 0.4rem 0.4rem 0.4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InnerBox = styled.div``;

const ColorTitle = styled.span`
  font-size: 1.2rem;
  width: 60px;
`;
const SelectedColor = styled.span`
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
