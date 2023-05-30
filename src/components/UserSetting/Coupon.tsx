import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import cl from "../../constants/color/color";
import { ICoupon } from "../../interface/coupon.interface";

const restTime = (expiry_date: Date) =>
  new Date(expiry_date).getTime() - Date.now();

const isExpired = (expiry_date: Date) => {
  return restTime(expiry_date) < 0;
};

const almostExpired = (expiry_date: Date) => {
  if (!isExpired(expiry_date)) {
    const rest = restTime(expiry_date);
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);

    if (days <= 7) return [days, hours, min];
    return [];
  }
};

const getRestTimeCounter = (count: Array<number>) => {
  return `${count[0]}day${count[0] > 1 ? "s" : ""} ${count[1]}hours ${
    count[2]
  }min left`;
};

const getExpirationDate = (expiry_date: Date) => {
  return `${dayjs(Date.now()).format("YYYY MMMM DD")} -
    ${dayjs(expiry_date.toString()).format("YYYY MMMM DD")}`;
};

const Coupon = (props: ICoupon) => {
  const { amount, code, discount_type, minimum_amount, expiry_date, is_used } =
    props;
  almostExpired(expiry_date);
  return (
    <CouponContainer>
      <CouponWrapper>
        <CouponValue isExpired={isExpired(expiry_date)} isUsed={is_used}>
          {discount_type === "fixed_amount" && "$"}
          {amount}
          {discount_type === "percentage" && "%"}
        </CouponValue>
        <CouponInfo>
          <InfoList>
            <Code isExpired={isExpired(expiry_date)} isUsed={is_used}>
              {code}
            </Code>
            <InfoItem>minimum ${minimum_amount}</InfoItem>
            <InfoItem
              almostExpired={almostExpired(expiry_date)?.length! > 0}
              isUsed={is_used}
            >
              {almostExpired(expiry_date)?.length! > 0 && !is_used
                ? getRestTimeCounter(almostExpired(expiry_date)!)
                : getExpirationDate(expiry_date)}
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

const Code = styled.li<{
  isUsed: boolean;
  isExpired: boolean;
}>`
  font-size: 2rem;
  font-weight: 900;
  color: ${({ isExpired, isUsed }) =>
    isExpired || isUsed ? `${cl.textLightGray}` : `${cl.green}`};
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;
const InfoItem = styled.li<{ isUsed?: boolean; almostExpired?: boolean }>`
  color: ${({ isUsed, almostExpired }) =>
    !isUsed && almostExpired && `${cl.red}`};
  font-weight: 500;
`;
const CouponValue = styled.div<{ isUsed: boolean; isExpired: boolean }>`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem 0 0 0.8rem;
  display: flex;
  flex: 1;
  position: relative;
  background: ${({ isUsed, isExpired }) =>
    isUsed || isExpired ? `${cl.textLightGray}` : `${cl.green}`};
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
