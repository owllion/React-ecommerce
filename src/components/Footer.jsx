import React from "react";
import styled from "styled-components";
import cl from "../constants/color/color";

import { ImPhone, ImLocation } from "react-icons/im";
import { IoMdMail } from "react-icons/io";

const contact = [
  {
    el: <ImLocation />,
    info: "contact@lama.dev",
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
    <>
      <Container>
        <Left>
          <Logo>Koh.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </Desc>
          <h3>Follow Us</h3>
          <SocialContainer>
            {["fb", "twitter", "ig"].map((item, index) => {
              const url = require(`../assets/social/${item}.svg`);
              return (
                <SocialIcon key={index}>
                  <Img src={url} />
                </SocialIcon>
              );
            })}
          </SocialContainer>
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
            <span>Secured Payment Gateways</span>
            <CardImgContainer>
              <CardImg src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </CardImgContainer>
          </PaymentContainer>
        </Right>
      </Container>

      <Copyright>&copy; Koh. 2022</Copyright>
    </>
  );
};

const Container = styled.div`
  display: flex;
  padding: 4.5rem 3rem 1rem 3rem;
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
  margin: 1.2rem 0px;
`;
const SocialContainer = styled.div`
  display: flex;
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
  width: 100%;
  object-fit: contain;
`;
const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`;
export default Footer;
