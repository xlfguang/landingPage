import styled from "styled-components";
import footerLogo from "../assets/img/footerLogo.png";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 61px;
  padding: 0 48px;
  background-color: #000000;

  @media (max-width: 775px) {
    padding: 16px;
    flex-direction: column;
    gap: 12px;
  }

  @media (min-width: 776px) and (max-width: 1439px) {
    padding: 0 32px;
  }
`;

const FooterContent = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 775px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Logo = styled.img`
  width: 142px;
  height: 39px;
  object-fit: contain;

  @media (max-width: 775px) {
    width: 100px;
    height: auto;
  }
`;

const Copyright = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  text-align: center;
  flex: 1;

  @media (max-width: 775px) {
    font-size: 10px;
    flex: none;
  }

  @media (min-width: 776px) and (max-width: 1439px) {
    font-size: 12px;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo src={footerLogo} alt="Rise Video" />
        <Copyright>
          © 2025 ClipN is a QQAI.AI INC. product. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};
