import { useEffect, useState } from "react";
import dayjs from "dayjs";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import cl from "../../constants/color/color";
import SectionTitle from "./SectionTitle";
import { getPopulatedList } from "src/api/user.api";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { IOrder } from "../../interface/order.interface";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { commonActions } from "../../store/slice/Common.slice";
import Lottie from "src/components/Common/Lottie";

interface IOrderList {
  data: {
    orderList: IOrder[];
  };
}

const OrderList = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.common);
  const [orderList, setOrderList] = useState<IOrder[]>([]);
  const getOrderList = async () => {
    try {
      dispatch(commonActions.setLoading(true));
      const {
        data: { orderList },
      }: IOrderList = await getPopulatedList({ type: "order" });
      setOrderList(orderList);
      dispatch(commonActions.setLoading(false));
    } catch (error) {
      dispatch(commonActions.setLoading(false));

      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
  useEffect(() => {
    getOrderList();
  }, []);
  return (
    <Container>
      <SectionTitle title="OrderList" />
      <Wrapper>
        <TableWrapper>
          {orderList.length === 0 && isLoading && <Skeleton height="80px" />}
          {orderList.length !== 0 && !isLoading && (
            <TableHeader>
              <HeaderItem>Order ID</HeaderItem>
              <HeaderItem>Subtotal</HeaderItem>
              <HeaderItem>Status</HeaderItem>
              <HeaderItem>Created</HeaderItem>
            </TableHeader>
          )}

          {orderList.length === 0 && isLoading ? (
            <Skeleton count={5} height="50px" style={{ marginTop: "30px" }} />
          ) : (
            <TableMainContainer>
              <OrderItemContainer>
                {orderList.map((item) => (
                  <OrderItem>
                    <ID>
                      <Link to={`/order/detail/${item.orderId}`}>
                        {item.orderId.substring(0, 7).toUpperCase()}
                      </Link>
                    </ID>

                    <Total>
                      $
                      {(item.discountTotal ? item.discountTotal : item.total) +
                        item.shipping}
                    </Total>
                    <Status>
                      <Chip>
                        {item.orderStatus === 0 ? "completed" : "canceled"}
                      </Chip>
                    </Status>
                    <Date>{dayjs(item.createdAt).format("YYYY MMMM DD")}</Date>
                  </OrderItem>
                ))}
              </OrderItemContainer>
            </TableMainContainer>
          )}
          {orderList.length === 0 && !isLoading && (
            <>
              <Lottie jsonName="noResult" text="NO ORDER FOUND" />
              <p>Loos like you have noe made your order yey.</p>
            </>
          )}
        </TableWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 2rem;
  position: relative;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 5px solid transparent;
    background-clip: content-box;
    background-color: #8070d4;
  }
`;
const TableWrapper = styled.div``;
const TableHeader = styled.div`
  position: sticky;
  top: 0;
  min-width: 745px; //for scroll
  background: ${cl.purple};
  color: ${cl.white};
  height: 75px;
  font-weight: 500;
  border-radius: 5px;
  display: flex;
  padding: 1.2rem 5rem;
  align-items: center;
  justify-content: space-between;
`;
const HeaderItem = styled.div`
  flex: 1;
  @media (max-width: 800px) {
    flex: 0 0 180px;
  }
`;
const TableMainContainer = styled.div``;
const OrderItemContainer = styled.div``;
const OrderItem = styled.div`
  display: flex;
  height: 75px;
  padding: 1.2rem 5rem;
  border-radius: 5px;
  background: #ffffff;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  min-width: 745px;
`;
const baseP = css`
  margin: 0;
  flex: 1;
  @media (max-width: 800px) {
    flex: 0 0 180px;
  }
`;
const ID = styled.p`
  ${baseP}

  color: ${cl.blue};
  letter-spacing: 1px;
  cursor: pointer;
`;
const Date = styled.p`
  ${baseP}
`;
export const Chip = styled.span<{ status?: string }>`
  background: ${({ status }) => (status === "cancel" ? "#fbcccc" : "#CFEEE8")};
  padding: 0.2rem;
  border-radius: 10px;
  color: ${({ status }) => (status === "cancel" ? "#f25551" : "#4B8F6E")};
  font-weight: 800;
  display: block;
  width: 90px;
  font-size: 0.8rem;
  text-align: center;
`;
const Status = styled.p`
  ${baseP}
`;
const Total = styled.p`
  ${baseP}
`;

export default OrderList;
