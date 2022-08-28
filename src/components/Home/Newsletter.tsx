import { useState } from "react";

import styled from "styled-components";
import cl from "../../constants/color/color";
import { IoIosSend } from "react-icons/io";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [value, setValue] = useState("");
  const handleSendFakeEmail = () => {
    toast.success("Thanks for your subscription!");
    setValue("");
  };
  return (
    <Container>
      <Content>
        <TitleBox>
          <Title>End of Summer!</Title>
          <SubTitle>Up to 40% off on all items.</SubTitle>
        </TitleBox>
        <Desc>Last chance to take advantage of our discounts!</Desc>
        <InputContainer>
          <Input
            placeholder="Your email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <SendBtn onClick={() => handleSendFakeEmail()}>
            <IoIosSend />
          </SendBtn>
        </InputContainer>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45vh;
  padding: 5rem 0;
  margin-top: 5rem;
  background-color: ${cl.mainGray};

  /* @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 50vh;
    text-align: center;
  } */
  @media (max-width: 680px) {
    padding: 2.5rem 1rem;
    height: 80vh;
  }
`;
const Content = styled.div``;
const TitleBox = styled.div`
  font-weight: 500;
  text-align: center;
`;
const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
`;
const SubTitle = styled.h3`
  font-size: 2.1rem;
  font-weight: 600;
`;
const Desc = styled.div`
  font-size: 1.2rem;
  margin: 2rem 0;
  text-align: center;
  color: ${cl.darkenGray};
`;
const InputContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  display: flex;
  border-radius: 0 5px 5px 0;
  /* @media (max-width: 820px) {
    width: 80%;
  }
  @media (max-width: 375px) {
    width: auto;
  } */
`;
const Input = styled.input`
  border: none;
  flex: 8;
  border-radius: 4px;
  width: 100%;
  padding-left: 1.2rem;
  &:focus {
    outline: none;
  }
`;
const SendBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: teal;
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 0 5px 5px 0;
  transition: all 0.5s ease-in;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${cl.white};
    color: ${cl.green};
  }
`;
export default Newsletter;
