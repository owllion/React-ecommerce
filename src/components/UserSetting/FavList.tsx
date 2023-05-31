import { useEffect } from "react";
import styled from "styled-components";
import { batch } from "react-redux";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import SingleProduct from "../Product/SingleProduct";
import SectionTitle from "./SectionTitle";

import { IProduct } from "../../interface/product.interface";
import { commonActions } from "../../store/slice/Common.slice";
import { userActions } from "../../store/slice/User.slice";
import { Spacer } from "../../pages/ProductList";
import NoResult from "./NoResult";
import { getFavListApi } from "../../api/user.api";

const FavList = () => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.user || {});
  const { isLoading } = useAppSelector((state) => state.common || {});
  const getFavListHandler = async () => {
    try {
      dispatch(commonActions.setLoading(true));
      const { data } = await getFavListApi();
      batch(() => {
        dispatch(userActions.setFavorites(data));
        dispatch(commonActions.setLoading(false));
      });
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
        {favorites && (
          <>
            {favorites.map((item) => (
              <SingleBox key={item.id}>
                {Object.keys(item).length > 0 ? (
                  <SingleProduct item={item as IProduct} />
                ) : (
                  <Spacer />
                )}
              </SingleBox>
            ))}
          </>
        )}
      </Wrapper>
      {favorites?.length === 0 && !isLoading && (
        <Flex>
          <NoResult
            imgText={"NOTHING HERE"}
            btnText={"Add Something"}
            route={"product-list"}
          />
        </Flex>
      )}
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
  @media (max-width: 380px) {
    padding: 0;
  }
`;
const SingleBox = styled.div`
  flex-basis: 30%;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default FavList;
