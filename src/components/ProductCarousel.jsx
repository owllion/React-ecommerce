import React, { useRef } from "react";

import styled from "styled-components";

import SingleProduct from "./SingleProduct";
import SliderBtn from "./SliderBtn";

import { popularProducts } from "../data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";

const ProductCarousel = () => {
  const swiperRef = useRef();
  const toPrev = () => {
    swiperRef.current.slidePrev();
  };
  const toNext = () => {
    swiperRef.current.slideNext();
  };
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
        {popularProducts.map((item) => (
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
