import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem;
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

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Privacy Policy</Title>
        <Paragraph>
          Who We Are At Koh, we are committed to maintaining the trust and
          confidence of all visitors to our web site. In particular, we want you
          to know that Koh is not in the business of selling, renting or trading
          email lists with other companies and businesses for marketing
          purposes.  In this Privacy Policy, we’ve provided detailed information
          on when and why we collect personal information, how we use it, the
          limited conditions under which we may disclose it to others, and how
          we keep it secure.  We take your privacy seriously and take measures
          to provide all visitors and users of Koh with a safe and secure
          environment. Cookies  Koh may set and access Koh cookies on your
          computer.  Cookies are used to provide our system with the basic
          information to provide the services you are requesting.  Cookies can
          be cleared at any time from your internet browser settings.  Google
          Analytics When someone visits Koh we use a third party service, Google
          Analytics, to collect standard internet log information and details of
          visitor behaviour patterns. We do this to track things such as the
          number of visitors to the various parts of the site and interactions
          with the site. This information is processed in a way which does not
          identify anyone. We do not make, and do not allow Google to make, any
          attempt to find out the identities of visitors to our website. 
          Website Comments When someone visits Koh, there may be an ability to
          submit comments on particular articles or pages.  When comments are
          submitted, you are entitled to use aliases or information that
          completely hides your identity. When a comment is submitted, the
          relevant details (name, email, website) that you provide are stored. 
          These details are stored so that we can display your comment back to
          you, and to anyone viewing the comment sections on the site. We do not
          verify information entered nor do we require verification. Third
          Parties There may be some circumstances where your IP address,
          geographic location, and other browser related details may be shared
          with third party companies.  We may share your above mentioned data
          with following third party companies from time to time. Access to Your
          Personal Information You are entitled to view, amend, or delete the
          personal information that we hold.Changes to Our Privacy Policy We may
          make changes to our Privacy Policy in the future, however, the most
          current version of the policy will govern our processing of your
          personal data and will always be available to you. If we make a change
          to this policy that, in our sole discretion, is material, we will
          notify you by an update or email, where possible. By continuing to
          access or use our services, you agree to be bound to the terms of our
          Privacy Policy.
        </Paragraph>
      </ContentWrapper>
    </Wrapper>
  );
};

export default PrivacyPolicy;
