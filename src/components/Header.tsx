import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(245, 240, 248, 0.95);
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: 'R';
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 8px;
    font-weight: 700;
  }
`;

const CreateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: #2d2d2d;
  color: white;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1a1a1a;
    transform: translateY(-2px);
  }

  &::before {
    content: '⭐';
    font-size: 18px;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <CreateButton>Creating Now</CreateButton>
    </HeaderContainer>
  );
};


