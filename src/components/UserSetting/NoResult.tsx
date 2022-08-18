import { memo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import cl from "../../constants/color/color";
import Lottie from "src/components/Common/Lottie";
import { RouteBtn } from "../Checkout/OrderComplete";

interface IProps {
  imgText: string;
  btnText?: string;
  route?: string;
  showBtn?: boolean;
}

const NoResult = ({ imgText, btnText, route, showBtn = true }: IProps) => {
  const navigate = useNavigate();
  return (
    <NoResultContainer>
      <Lottie jsonName="noResult" text={imgText} />
      {showBtn && (
        <RouteBtn
          onClick={() => navigate(`/${route}`)}
          style={{ backgroundColor: `${cl.purple}` }}
        >
          {btnText}
        </RouteBtn>
      )}
    </NoResultContainer>
  );
};

const NoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default memo(NoResult);
