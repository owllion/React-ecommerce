import React from "react";
import styled, { css, keyframes } from "styled-components";
import cl from "../../constants/color/color";

import FilterOptionList from "./FilterOptionList";
import { apparelBrand } from "../../data/apparelBrand";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const priceOption = [
  "$10 to $15",
  "$100 to $200",
  "$200-300$",
  "400 to $500",
  "$500 above",
];

const CategoryOption = [
  "Blazers",
  "Shirts",
  "Knitwear",
  "T-shirts",
  "Coats",
  "Hat",
  "Trouser",
];

const Filter = ({ active, handleActive }) => {
  return (
    <Container>
      <SelectBtn onClick={(e) => handleActive(e)}>
        <SelectBtnText>
          <span>Filter</span>
          {active ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
        </SelectBtnText>
      </SelectBtn>
      {active && (
        <Options active={active}>
          <FilterOptionList title="Category" itemList={CategoryOption} />
          <FilterOptionList title="Brand" itemList={apparelBrand} />
          <FilterOptionList title="Price" itemList={priceOption} />
          <SearchBtn>Clear</SearchBtn>
        </Options>
      )}
    </Container>
  );
};
const fadeInUp = keyframes`
from {
    transform: translate3d(0, 30px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
const Container = styled.div`
  width: 300px;
  @media (min-width: 1000px) {
    margin-right: 2rem;
  }
  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
  position: relative;
`;

const SelectBtn = styled.div`
  display: flex;
  height: 55px;
  background: #fff;
  padding: 20px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;
const SelectBtnText = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  span {
    padding-right: 0.6rem;
  }
`;

const Options = styled.ul`
  overflow-y: scroll;
  height: 500px;
  /* background: #000; */
  position: absolute;
  width: 100%;
  z-index: 10;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  ${({ active }) => {
    if (active) {
      return css`
        opacity: 0;
        animation-name: ${fadeInUp};
        -webkit-animation-name: ${fadeInUp};
        animation-duration: 0.4s;
        animation-fill-mode: both;
        -webkit-animation-duration: 0.4s;
        -webkit-animation-fill-mode: both;
      `;
    }
  }}
`;
const SearchBtn = styled.button`
  border: none;
  width: 100%;
  border-radius: 8px;
  padding: 0.8rem;
  font-weight: bold;
  color: ${cl.white};
  background: ${cl.primary};
  &:focus {
    outline: none;
  }
`;
export default Filter;
