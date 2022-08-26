import React from "react";
import styled, { css, keyframes } from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import { useAppDispatch } from "../../store/hooks";
import cl from "../../constants/color/color";
import FilterOptionList from "./FilterOptionList";
import * as FilterOptions from "../../data/filterOptions";
import { productActions } from "../../store/slice/Product.slice";

interface IProps {
  active: boolean;
  handleActive: React.MouseEventHandler<HTMLDivElement>;
}
const Filter = ({ active, handleActive }: IProps) => {
  const dispatch = useAppDispatch();
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
          <FilterOptionList
            title="Category"
            itemList={FilterOptions.categoryOptions}
          />
          <FilterOptionList
            title="Brand"
            itemList={FilterOptions.brandOptions}
          />
          <FilterOptionList
            title="Price"
            itemList={FilterOptions.priceOptions}
          />
          <ClearBtn onClick={() => dispatch(productActions.clearAllState())}>
            Clear
          </ClearBtn>
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
  @media (min-width: 950px) {
    height: 55px;
  }
  background: #fff;
  padding: 1.3rem;
  font-size: 1.1rem;
  font-weight: 400;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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

const Options = styled.ul<{ active: boolean }>`
  overflow-y: scroll;
  height: 500px;
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
export const ClearBtn = styled.button`
  border: none;
  width: 100%;
  border-radius: 8px;
  padding: 0.8rem;
  font-weight: bold;
  color: ${cl.white};
  cursor: pointer;
  background: ${cl.primary};
  &:focus {
    outline: transparent;
  }
`;
export default Filter;
