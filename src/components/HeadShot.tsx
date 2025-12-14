import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 48px;
  background-color: #ffffff;
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

const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
  flex-wrap: wrap;
`;

const Card = styled.div<{ $size?: 'small' | 'large' }>`
  width: ${props => props.$size === 'large' ? '280px' : '200px'};
  height: ${props => props.$size === 'large' ? '350px' : '250px'};
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.div<{ $bgImage?: string }>`
  width: 100%;
  height: 100%;
  background-image: ${props => props.$bgImage ? `url(${props.$bgImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  background-size: cover;
  background-position: center;
`;

const Arrow = styled.div`
  font-size: 32px;
  color: #667eea;
  font-weight: bold;
  display: flex;
  align-items: center;
  transform: rotate(-45deg);
  margin: 0 -10px;
  z-index: 10;
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
  margin: 0 auto;
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

export const HeadShot = () => {
  return (
    <Section>
      <SectionContent>
        <SectionTitle>HeadShot</SectionTitle>
        <SectionDescription>
          Quickly create professional headshots without the hassle of traditional photoshoots, presenting a perfect image.
        </SectionDescription>
        <CardsContainer>
          <Card $size="small">
            <CardImage $bgImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" />
          </Card>
          <Arrow>→</Arrow>
          <Card $size="large">
            <CardImage $bgImage="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" />
          </Card>
          <Card $size="small">
            <CardImage $bgImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" />
          </Card>
          <Card $size="small">
            <CardImage $bgImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" />
          </Card>
          <Card $size="small">
            <CardImage $bgImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" />
          </Card>
        </CardsContainer>
        <CTAButton>Create Professional Headshot</CTAButton>
      </SectionContent>
    </Section>
  );
};

