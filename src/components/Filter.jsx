import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

import { sortOptions } from "../data/sortOptions";
import "../styles/filter.css";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const Filter = ({ active, handleActive }) => {
  useEffect(() => {
    console.log("現在active的值->", active);
  }, [active]);
  return (
    <Container>
      <SelectBtn onClick={() => handleActive()}>
        <SelectBtnText>
          Filter
          {active ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
        </SelectBtnText>
      </SelectBtn>

      <Options active={active}>
        <input
          className="inp-cbx"
          id="cbx"
          type="checkbox"
          style={{ display: "none" }}
        />
        <label className="cbx" for="cbx">
          <span>
            <svg width="12px" height="9px" viewbox="0 0 12 9">
              <polyline points="1 5 4 8 11 1"></polyline>
            </svg>
          </span>
          <span></span>
        </label>
      </Options>
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
const SelectBtnText = styled.span``;

const Options = styled.ul`
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
const Option = styled.li`
  display: flex;
  height: 55px;
  cursor: pointer;
  padding: 0 1rem;
  border-radius: 8px;
  align-items: center;
  background: #fff;
  &:hover {
    background: #f2f2f2;
  }
`;
const OptionIcon = styled.div`
  font-size: 1.2rem;
  margin-right: 0.8rem;
`;
const OptionText = styled.span`
  font-size: 1.2rem;
  color: #333;
`;
export default Filter;
