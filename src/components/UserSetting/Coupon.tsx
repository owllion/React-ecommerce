import React from "react";
import styled, { css } from "styled-components";
import dayjs from "dayjs";

import cl from "../../constants/color/color";
import { ICoupon } from "../../interface/coupon.interface";
const Coupon = (props: ICoupon) => {
  const {
    amount,
    code,
    discountType,
    minimumAmount,
    expiryDate,
    isUsed,
    createdAt,
  } = props;
  return (
    <CouponContainer>
      <CouponWrapper>
        <CouponValue isUsed={isUsed}>
          {discountType === "rebate" && "$"}
          {amount}
          {discountType === "percentage" && "%"}
        </CouponValue>
        <CouponInfo>
          <InfoList>
            <InfoItem big isUsed={isUsed}>
              {code}
            </InfoItem>
            <InfoItem>minimum ${minimumAmount}</InfoItem>
            <InfoItem>
              {dayjs(createdAt).format("YYYY MMMM DD")}-
              {dayjs(expiryDate.toString()).format("YYYY MMMM DD")}
            </InfoItem>
          </InfoList>
        </CouponInfo>
      </CouponWrapper>
    </CouponContainer>
  );
};

const CouponContainer = styled.div`
  margin-bottom: 20px;
`;
const CouponWrapper = styled.div`
  display: flex;
`;

const CouponInfo = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: 0.7rem 0.9rem;
  border-radius: 0 0.8rem 0.8rem 0;
  position: relative;
  background: #fff;
  flex: 3;
  @media (max-width: 400px) {
    padding: 21px 15px;
  }

  &:after {
    content: " ";
    border: 2px dashed #fffefe;
    height: 100%;
    position: absolute;
    top: 0;
    left: -2px;
    z-index: 2;
  }
`;

const InfoList = styled.ul`
  color: #aaa;
`;
const InfoItem = styled.li<{ big?: boolean; isUsed?: boolean }>`
  ${({ big, isUsed }) =>
    big &&
    css`
      font-size: 2rem;
      font-weight: 900;
      color: ${isUsed ? `${cl.textLightGray}` : `${cl.green}`};
      @media (max-width: 400px) {
        font-size: 1.5rem;
      }
    `}
`;
const CouponValue = styled.div<{ isUsed: boolean }>`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem 0 0 0.8rem;
  display: flex;
  flex: 1;
  position: relative;
  background: ${({ isUsed }) =>
    isUsed ? `${cl.textLightGray}` : `${cl.green}`};
  color: ${cl.white};
  font-size: 2rem;
  @media (max-width: 350px) {
    font-size: 1.5rem;
  }
  font-weight: 900;
  align-items: center;
  justify-content: center;
`;
export default Coupon;
