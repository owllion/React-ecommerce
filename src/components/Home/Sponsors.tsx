import React from "react";
import styled from "styled-components";

const Sponsors = () => {
  return (
    <Container>
      <Wrapper>
        {[...Array(4)].map((_, index) => {
          const url = require(`../../assets/sponsor/logo${index + 1}.png`);

          return (
            <LogoBox key={index}>
              <Logo src={url} alt="sponsor" />
            </LogoBox>
          );
        })}
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 5rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  /* @media (max-width: 370px) {
    flex-direction: column;
  } */
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;
const LogoBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Logo = styled.img`
  width: 5rem;
  transition: all 0.3s ease;
  filter: opacity(70%);
  ${LogoBox}:hover & {
    filter: none;
  }
`;
export default Sponsors;
