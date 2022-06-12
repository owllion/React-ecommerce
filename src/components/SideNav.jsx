import React from "react";
import { motion } from "framer-motion";
import "../styles/sidenav.css";
import styled from "styled-components";
import cl from "../constants/color/color";
import { IoMdClose } from "react-icons/io";

const SideNav = ({ handleShowSideNav }) => {
  return (
    <Backdrop onClick={handleShowSideNav} id="backdrop">
      <Menu
        as={motion.div}
        initial={{ opacity: 0, x: -250 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CloseBtn onClick={handleShowSideNav} id="close">
          <IoMdClose id="closeIcon" />
        </CloseBtn>
        <ul>
          <li className="nav-text">123</li>
        </ul>
      </Menu>
    </Backdrop>
  );
};

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
`;
const Menu = styled.div`
  width: 320px;
  height: 100%;
  top: 0;
  bottom: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  background: ${cl.mainGray};
`;
const CloseBtn = styled.div`
  cursor: pointer;
`;
export default SideNav;
