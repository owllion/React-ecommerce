import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import cl from "../../constants/color/color";
import SectionTitle from "./SectionTitle";

const OrderList = () => {
  const [status, setStatus] = useState("complete");

  return (
    <Container>
      <SectionTitle title="OrderList" />
      <Wrapper>
        <TableWrapper>
          <TableHeader>
            <HeaderItem>Order ID</HeaderItem>
            <HeaderItem>Subtotal</HeaderItem>
            <HeaderItem>Status</HeaderItem>
            <HeaderItem>Created</HeaderItem>
          </TableHeader>
          <TableMainContainer>
            <OrderItemBox>
              <OrderItem>
                <ID>
                  <Link to={"/order/order-detail/5"}>I996688522 </Link>
                </ID>

                <Total>$385</Total>
                <Status>
                  <Chip status={status}>Cancel</Chip>
                </Status>
                <Date>22/07/2022</Date>
              </OrderItem>
              <OrderItem>
                <ID>I996688522</ID>
                <Total>$385</Total>
                <Status>
                  <Chip status={status}>Cancel</Chip>
                </Status>
                <Date>22/07/2022</Date>
              </OrderItem>
              <OrderItem>
                <ID>I996688522</ID>
                <Total>$385</Total>
                <Status>
                  <Chip status={status}>Complete</Chip>
                </Status>
                <Date>22/07/2022</Date>
              </OrderItem>
              <OrderItem>
                <ID>I996688522</ID>
                <Total>$385</Total>
                <Status>
                  <Chip status={status}>Cancel</Chip>
                </Status>
                <Date>22/07/2022</Date>
              </OrderItem>
              <OrderItem>
                <ID>I996688522</ID>
                <Total>$385</Total>
                <Status>
                  <Chip status={status}>Cancel</Chip>
                </Status>
                <Date>22/07/2022</Date>
              </OrderItem>
            </OrderItemBox>
          </TableMainContainer>
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
const OrderItemBox = styled.div``;
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
  /* @media (max-width: 700px) {
    width: max-content;
  } */
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
export const Chip = styled.span`
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
