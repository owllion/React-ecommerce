import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { AnyAction } from "redux";

import { useAppDispatch } from "src/store/hooks";
import { productActions } from "src/store/slice/Product.slice";
import { useDebounce } from "src/hooks/useDebounce";
import getProductList from "src/store/actions/product/getProductList.action";
import { useIsFirstRender } from "src/hooks/useIsFirstRender";

interface IProps {
  handleGetKeyword: (value: string | undefined) => void;
}
const SearchBar = ({ handleGetKeyword }: IProps) => {
  const [keyword, setKeyword] = useState<string>("");
  const dispatch = useAppDispatch();
  const debounceValue = useDebounce<string>(keyword, 1000);
  const isFirst = useIsFirstRender();

  const setKeywordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
    handleGetKeyword(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      dispatch(productActions.setCurPage(1));
      await dispatch(getProductList(debounceValue) as unknown as AnyAction);
    };
    !isFirst && getData();
  }, [debounceValue]);
  return (
    <SearchBox>
      <SearchInnerBox>
        <SearchBtn>
          <IoIosSearch />
        </SearchBtn>
        <SearchInput type="text" onChange={setKeywordHandler} />
      </SearchInnerBox>
    </SearchBox>
  );
};
const SearchBox = styled.div`
  width: 100%;
  margin-right: 2rem;
  flex: 1;
  @media (max-width: 950px) {
    margin-bottom: 1.5rem;
    margin-right: 0;
  }
`;
const SearchInnerBox = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 950px) {
    height: 71px;
  }
  position: relative;
`;
const SearchBtn = styled.button`
  width: 70px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  height: 100%;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
`;
const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  background: transparent;
  border: 0;
  background: #fff;
  display: block;
  width: 100%;
  padding: 10px 32px 10px 70px;
  font-size: 1.2rem;
  color: #666;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:focus {
    outline: transparent;
  }
`;
export default SearchBar;
