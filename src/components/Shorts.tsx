import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 48px;
  background-color: #f5f0f8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionContent = styled.div`
  max-width: 1440px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 56px;
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 16px;
  font-family: 'Georgia', serif;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 48px;
  max-width: 600px;
`;

const CTAButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: linear-gradient(135deg, #b794d4 0%, #9b7bb8 100%);
  color: white;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin: 0 auto 48px;
  display: block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(183, 148, 212, 0.4);
  }

  &::before {
    content: '⭐';
    font-size: 20px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div<{ $isPhone?: boolean }>`
  width: ${props => props.$isPhone ? '280px' : '320px'};
  height: ${props => props.$isPhone ? '500px' : '570px'};
  border-radius: ${props => props.$isPhone ? '24px' : '16px'};
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  background: ${props => props.$isPhone ? '#000' : 'transparent'};
  padding: ${props => props.$isPhone ? '8px' : '0'};
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`;

const PhoneFrame = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background: #000;
`;

const CardImage = styled.div<{ $bgImage?: string }>`
  width: 100%;
  height: 100%;
  background-image: ${props => props.$bgImage ? `url(${props.$bgImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  z-index: 10;
  transition: all 0.3s ease;

  &::before {
    content: '▶';
    margin-left: 4px;
  }

  ${Card}:hover & {
    background: rgba(255, 255, 255, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const SocialIcons = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 10;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  animation: float 2s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export const Shorts = () => {
  return (
    <Section>
      <SectionContent>
        <SectionTitle>Shorts</SectionTitle>
        <SectionDescription>
          Quickly generate stunning short videos to boost brand promotion and easily attract attention.
        </SectionDescription>
        <CTAButton>Create Short Videos Now</CTAButton>
        <CardsContainer>
          <Card>
            <CardImage $bgImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80" />
            <PlayButton />
          </Card>
          <Card $isPhone>
            <PhoneFrame>
              <CardImage $bgImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80" />
              <SocialIcons>
                <Icon>❤️</Icon>
                <Icon>👍</Icon>
                <Icon>⭐</Icon>
              </SocialIcons>
            </PhoneFrame>
          </Card>
          <Card>
            <CardImage $bgImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80" />
            <PlayButton />
          </Card>
        </CardsContainer>
      </SectionContent>
    </Section>
  );
};

