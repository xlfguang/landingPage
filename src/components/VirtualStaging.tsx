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

const ComparisonContainer = styled.div`
  display: flex;
  gap: 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: 48px;
  position: relative;
  background: white;
`;

const BeforeAfterLabel = styled.div<{ $side: 'left' | 'right' }>`
  position: absolute;
  ${props => props.$side}: 24px;
  top: 24px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  z-index: 10;
`;

const ImageHalf = styled.div<{ $bgImage?: string }>`
  flex: 1;
  height: 500px;
  background-image: ${props => props.$bgImage ? `url(${props.$bgImage})` : 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)'};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Divider = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 60px;
  background: white;
  border-radius: 2px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &::before {
    content: '↔';
    position: absolute;
    color: white;
    font-size: 24px;
    background: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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

export const VirtualStaging = () => {
  return (
    <Section>
      <SectionContent>
        <SectionTitle>Virtual Staging</SectionTitle>
        <SectionDescription>
          Transform empty rooms instantly with virtual staging, creating the ideal home effortlessly.
        </SectionDescription>
        <ComparisonContainer>
          <BeforeAfterLabel $side="left">Before</BeforeAfterLabel>
          <ImageHalf $bgImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" />
          <Divider />
          <ImageHalf $bgImage="https://images.unsplash.com/photo-1484100356142-db6ab6244067?w=800&q=80" />
          <BeforeAfterLabel $side="right">After</BeforeAfterLabel>
        </ComparisonContainer>
        <CTAButton>Start Virtual Staging Now</CTAButton>
      </SectionContent>
    </Section>
  );
};

