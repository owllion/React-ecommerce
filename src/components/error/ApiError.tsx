import styled from "styled-components";
import cl from "../../constants/color/color";
import { useAppSelector } from "../../store/hooks";

const ApiError = () => {
  const { errorMsg } = useAppSelector((state) => state.common || {});
  console.log(errorMsg);
  return (
    <ErrMsgContainer>
      <Msg>{errorMsg}</Msg>
    </ErrMsgContainer>
  );
};

const ErrMsgContainer = styled.div`
  margin-top: 0.2rem;
`;
const Msg = styled.p`
  margin: 0;
  color: ${cl.red};
`;
export default ApiError;
