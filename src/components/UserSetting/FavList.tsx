import { useEffect, useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import SingleProduct from "../Product/SingleProduct";
import SectionTitle from "./SectionTitle";
import { getNormalList } from "../../api/user.api";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { IProduct } from "../../interface/product.interface";
import { commonActions } from "../../store/slice/Common.slice";
import { userActions } from "../../store/slice/User.slice";

const FavList = () => {
  const dispatch = useAppDispatch();
  const { favList } = useAppSelector((state) => state.user);
  // const [favList, setFavList] = useState<IProduct[]>();

  const getFavListHandler = async () => {
    try {
      dispatch(commonActions.setLoading(true));
      const {
        data: { favList },
      } = await getNormalList({ type: "favList" });
      dispatch(userActions.setFavList(favList));
      dispatch(commonActions.setLoading(false));
    } catch (error) {
      dispatch(commonActions.setLoading(false));

      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
  useEffect(() => {
    getFavListHandler();
  }, []);
  return (
    <Container>
      <SectionTitle title="Favorite" />
      <Wrapper>
        {favList && (
          <>
            {favList.map((item) => (
              <SingleBox>
                <SingleProduct item={item} />
              </SingleBox>
            ))}
          </>
        )}
      </Wrapper>
    </Container>
  );
};
const Container = styled.section`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
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
  @media (max-width: 767px) {
    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }
  }
  height: 500px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  @media (max-width: 380px) {
    padding: 0;
  }
`;
const SingleBox = styled.div`
  flex: 1;
`;
export default FavList;
