import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import cl from "../../constants/color/color";
import { useAppDispatch } from "../../store/hooks";
import { productActions } from "../../store/slice/Product.slice";
import CheckBox from "./CheckBox";

interface IProps {
  title: string;
  itemList: { name: string; val: string }[];
}
type Title = "Category" | "Brand" | "Price";

const FilterOptionList = ({ title, itemList }: IProps) => {
  const dispatch = useAppDispatch();
  const [range, setRange] = useState<number | undefined | void>(4);
  const [listState, setListState] = useState("more");
  const [checkedVal, setCheckedVal] = useState<string[]>([]);
  // const handleSetCheckVal = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   if (checkedVal.includes(value))
  //     return setCheckedVal((pre) => pre.filter((el, _) => el !== value));
  //   setCheckedVal((pre) => [...pre, value]);
  // };
  const handleSetCheckVal = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    const nowSelectedType = `set${title}` as
      | "setCategory"
      | "setBrand"
      | "setPrice";
    dispatch(productActions[nowSelectedType](value));
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
            current={title as Title}
            handleSetCheckVal={handleSetCheckVal}
          />
        ))}

        {itemList.length > 4 && (
          <SeeMore>
            <span
              onClick={() =>
                setRange((prev) => {
                  if (prev === itemList.length) return setRange(4);
                  else setRange(itemList.length);
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
