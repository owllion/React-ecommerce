import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const TermsofService = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Terms of Service</Title>
        <Paragraph>
          These Terms of Service ("Terms") govern your use of our website and
          services. By accessing or using our website and services, you agree to
          be bound by these Terms. Please read these Terms carefully before
          using our website and services. If you do not agree to these Terms,
          please do not use our website and services. We reserve the right to
          modify or update these Terms at any time, without prior notice to you.
          Your continued use of our website and services after such
          modifications or updates constitutes your acceptance of the revised
          Terms. If you have any questions or concerns about these Terms, please
          contact us.
        </Paragraph>
      </ContentWrapper>
    </Wrapper>
  );
};

export default TermsofService;
