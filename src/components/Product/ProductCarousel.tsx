import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";

import SliderBtn from "./SliderBtn";
import SingleProduct from "./SingleProduct";
import { getBestSellerApi } from "../../api/product.api";
import { IProduct } from "../../interface/product.interface";

const ProductCarousel = () => {
  const [bestSellerList, setBestSellerList] = useState<IProduct[]>([]);

  const swiperRef = useRef<{ slidePrev: () => void; slideNext: () => void }>();
  const toPrev = () => {
    swiperRef.current?.slidePrev();
  };
  const toNext = () => {
    swiperRef.current?.slideNext();
  };

  const getBestSeller = async () => {
    try {
      const { data } = await getBestSellerApi();
      console.log(data, "這赤data");
      setBestSellerList(data);
    } catch (error) {
      const err = error as AxiosError;
      const msg = (err.response?.data as { msg: string }).msg;
      toast.error(msg);
    }
  };
  useEffect(() => {
    getBestSeller();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Lazy, Navigation]}
        className="mySwiper"
        lazy={true}
        navigation={true}
      >
        {bestSellerList.map((item) => (
          <SwiperSlide key={item.id}>
            <SingleProduct item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderBtnContainer>
        <SliderBtn type="prev" clickHandler={toPrev} />
        <SliderBtn type="next" clickHandler={toNext} />
      </SliderBtnContainer>
    </>
  );
};

const SliderBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;
export default ProductCarousel;
