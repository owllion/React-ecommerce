import React from "react";
import { ImPhone, ImLocation } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import styled from "styled-components";

import cl from "../../constants/color/color";
import store1 from "src/assets/footer/store/footerstore1.png";
import store2 from "src/assets/footer/store/footerstore2.png";

const contact = [
  {
    el: <ImLocation />,
    info: "Lofoten Links, Tore Hjortsvei, Gimsøysand",
  },
  {
    el: <ImPhone />,
    info: "+1 156 51 63",
  },
  {
    el: <IoMdMail />,
    info: "contact@koh.gmail.com",
  },
];

const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          <Left>
            <Logo>Koh.</Logo>
            <Desc>Products Store</Desc>
            <StoreImgBox>
              <StoreImg src={store1}></StoreImg>
              <StoreImg src={store2}></StoreImg>
            </StoreImgBox>

            <LeftDown>
              <h3>Follow Us</h3>
              <SocialContainer>
                {["fb", "twitter", "ig"].map((item, index) => {
                  const url = require(`../../assets/footer/social/${item}.svg`);
                  return (
                    <SocialIcon key={index}>
                      <Img src={url} alt="Follow" />
                    </SocialIcon>
                  );
                })}
              </SocialContainer>
            </LeftDown>
          </Left>

          <Center1>
            <Title>About</Title>
            <List>
              <ListItem>About us</ListItem>
              <ListItem>Delivery Information</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Terms & Conditions</ListItem>
            </List>
          </Center1>
          <Center2>
            <Title>Useful Links</Title>
            <List>
              <ListItem>My Account</ListItem>
              <ListItem>View Cart</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Help</ListItem>
            </List>
          </Center2>

          <Right>
            <Title>Contact</Title>
            {contact.map((item, index) => (
              <ContactItem key={index}>
                <ContactIcon>{item.el}</ContactIcon>
                <ContactInfo>{item.info}</ContactInfo>
              </ContactItem>
            ))}
            <PaymentContainer>
              <span>Payment Options</span>
              <CardImgContainer>
                <CardImg src="https://i.ibb.co/Qfvn4z6/payment.png" />
              </CardImgContainer>
            </PaymentContainer>
          </Right>
        </Wrapper>
      </InnerContainer>

      <Copyright>&copy; 2022 Koh. All Rights Reserved</Copyright>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f5f5f5;
`;
const InnerContainer = styled.section`
  padding: 4.5rem 3rem 1rem 3rem;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;
const Wrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 1rem;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  margin-bottom: 1.5rem;
  margin-right: 5rem;
  @media (max-width: 1000px) {
    margin-right: 0;
  }
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 0;
  color: ${cl.darkenGray};
  padding-bottom: 0.4rem;
`;

const StoreImgBox = styled.div`
  width: 100px;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const StoreImg = styled.img`
  width: 100%;
  margin-right: 1rem;
  @media (max-width: 1025px) {
    display: inline-block;
    padding-bottom: 0.8rem;
  }
`;
const SocialContainer = styled.div`
  display: flex;
`;
const LeftDown = styled.div`
  margin-top: 2rem;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;
const Img = styled.img`
  width: 100%;
`;

const Center1 = styled.div`
  padding: 1.2rem;
  flex: 1;
`;
const Center2 = styled.div`
  padding: 1.2rem;
  flex: 1;
`;
const Title = styled.h3`
  margin-bottom: 1.5rem;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  width: 100%;
  cursor: pointer;
  margin-bottom: 0.8rem;
  @media (max-width: 380px) {
    width: 100%;
  }
`;
const Right = styled.div`
  padding: 1.2rem;
  flex: 1;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;
const ContactIcon = styled.div`
  margin-right: 0.8rem;
`;
const ContactInfo = styled.span``;
const PaymentContainer = styled.div`
  width: 100%;
  span {
    display: block;
    color: ${cl.darkenGray};
    padding-bottom: 0.9rem;
  }
`;
const CardImgContainer = styled.div`
  width: 300px;
`;
const CardImg = styled.img`
  width: 80%;
  object-fit: contain;
`;
const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`;
export default Footer;
