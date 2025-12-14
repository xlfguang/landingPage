import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
`;

const FooterContent = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: 'R';
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 8px;
    font-weight: 700;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  color: #666;
  text-align: right;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>Rise Video</Logo>
        <Copyright>
          © 2025 ClipN is a QGALAI INC. product. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

