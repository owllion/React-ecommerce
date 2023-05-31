import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import styled, { css } from "styled-components";

import cl from "../../constants/color/color";
import { ICoupon } from "../../interface/coupon.interface";
import Coupon from "./Coupon";
import SectionTitle from "./SectionTitle";
import NoResult from "./NoResult";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { commonActions } from "../../store/slice/Common.slice";
import { getCouponListApi } from "../../api/user.api";

const isExpired = (expiryDate: Date) => {
  const now = Date.now() / 1000;
  const expire = Math.floor(new Date(expiryDate).valueOf() / 1000);
  console.log(expire - now < 0, "有沒有過期??");

  return expire - now < 0;
};
const CouponList = () => {
  const { isLoading } = useAppSelector((state) => state.common || {});
  const { id } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState("unused");
  const [filteredList, setFilteredList] = useState<ICoupon[]>();
  const [couponList, setCouponList] = useState<ICoupon[]>();

  const getCouponList = async () => {
    try {
      console.log(id, "this is id");
      dispatch(commonActions.setLoading(true));
      const { data } = await getCouponListApi({ userId: id! });
      setCouponList(data);
      dispatch(commonActions.setLoading(false));
    } catch (error) {
      dispatch(commonActions.setLoading(false));
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
  useEffect(() => {
    getCouponList();
  }, []);

  useEffect(() => {
    const list = couponList?.filter((item) => {
      if (selected === "unused")
        return !isExpired(item.expiry_date) && !item.is_used;
      if (selected === "used") return item.is_used;
      else return isExpired(item.expiry_date);
    });
    setFilteredList(list);
  }, [couponList, selected]);
  return (
    <Container>
      <SectionTitle title="CouponList" />
      {couponList && couponList?.length > 0 && (
        <>
          <StateBar>
            <StateItems>
              <StateItem
                current="unused"
                selected={selected}
                onClick={() => {
                  setSelected("unused");
                }}
              >
                Unused
              </StateItem>
              <Divider>|</Divider>
              <StateItem
                current="used"
                selected={selected}
                onClick={() => {
                  setSelected("used");
                }}
              >
                Used
              </StateItem>
              <Divider>|</Divider>
              <StateItem
                current="expired"
                selected={selected}
                onClick={() => {
                  setSelected("expired");
                }}
              >
                Expired
              </StateItem>
            </StateItems>
          </StateBar>
          <Wrapper>
            {filteredList?.map((item) => (
              <SingleBox key={item.code}>
                <Coupon {...item} />
              </SingleBox>
            ))}
          </Wrapper>
        </>
      )}
      {filteredList?.length === 0 && !isLoading && (
        <NoResult imgText={"NOTHING HERE"} showBtn={false} />
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
const StateBar = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 2rem 0;
`;
const StateItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const baseState = css`
  padding: 0.7rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
`;
const StateItem = styled.span<{ selected: string; current: string }>`
  ${baseState}
  cursor: pointer;
  color: ${({ selected, current }) =>
    selected === current ? `${cl.green}` : `${cl.dark}`};
  &:hover {
    color: ${cl.green};
  }
`;
const Divider = styled.span`
  ${baseState}
`;
const SingleBox = styled.div`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 45%;
  }
`;
export default CouponList;
