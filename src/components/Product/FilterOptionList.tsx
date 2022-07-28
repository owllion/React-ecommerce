import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cl from "../../constants/color/color";

import CheckBox from "./CheckBox";
import { apparelBrand } from "../../data/apparelBrand";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface IProps {
  title: string;
  itemList: string[];
}
const FilterOptionList = ({ title, itemList }: IProps) => {
  const [range, setRange] = useState<number | undefined | void>(7);
  const [listState, setListState] = useState("more");
  const [checkVal, setCheckVal] = useState("");
  const handleSetCheckVal = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    console.log({ checkVal });
    setCheckVal(value);
  };

  useEffect(() => {
    range === itemList.length ? setListState("less") : setListState("more");
  }, [range]);

  return (
    <>
      <Container>
        <h3>{title}</h3>
        {itemList.slice(0, range as undefined | number).map((item, index) => (
          <CheckBox
            item={item}
            key={index}
            current={title}
            handleSetCheckVal={handleSetCheckVal}
          />
        ))}

        {itemList.length > 7 && (
          <SeeMore>
            <span
              onClick={() =>
                setRange((prev) => {
                  if (prev === apparelBrand.length) return setRange(7);
                  else setRange(apparelBrand.length);
                })
              }
            >
              See {listState}
            </span>
            {listState === "more" ? (
              <IoIosArrowDown color={cl.primary} />
            ) : (
              <IoIosArrowUp color={cl.primary} />
            )}
          </SeeMore>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const SeeMore = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.8rem;
  cursor: pointer;
  span {
    color: ${cl.primary};
    padding-right: 0.3rem;
  }
`;
export default FilterOptionList;
