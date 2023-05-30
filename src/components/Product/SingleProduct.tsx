import styled from "styled-components";
import { IoMdCart } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import { productItemMotion } from "../../lib/motion";
import { IProduct } from "../../interface/product.interface";
import Heart from "./Heart";
import { commonActions } from "../../store/slice/Common.slice";
import { useAppDispatch } from "../../store/hooks";
import toast from "react-hot-toast";

const SingleProduct = ({ item }: { item: IProduct | undefined }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleNavigate = (id: string) => {
    navigate(`/product-detail/${id}`);
  };
  const handleShowPopup = () => {
    localStorage.getItem("token")
      ? dispatch(commonActions.setShowPopup(true))
      : toast.error("You need to login");
  };

  return (
    <>
      <Container as={motion.div} layout {...productItemMotion}>
        <Wrapper>
          <Image src={item?.thumbnail} alt="product" />
          <Info>
            <Icon onClick={() => handleNavigate(item?.id!)}>
              <FiSearch />
            </Icon>
            <Icon
              onClick={() => {
                handleShowPopup();
                dispatch(commonActions.setCurrentProductId(item?.id!));
              }}
            >
              <IoMdCart />
            </Icon>
            <Heart item={item} />
          </Info>
        </Wrapper>
        <ItemInfo>
          <Name>{item?.product_name}</Name>
          <Price>${item?.price}</Price>
        </ItemInfo>
      </Container>
    </>
  );
};

const Container = styled.div``;
export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Wrapper = styled.div`
  flex: 1;
  margin: 0.2rem;
  padding: 1.2rem;
  min-width: 260px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 15px;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const Icon = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const ItemInfo = styled.div`
  @media (max-width: 821px) {
    text-align: center;
  }
`;
const Name = styled.h3`
  padding: 0.5rem 0 0 0.7rem;
`;
const Price = styled.p`
  padding-left: 0.7rem;
`;
export default SingleProduct;
