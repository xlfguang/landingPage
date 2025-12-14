import styled from "styled-components";
import arrowImg from "../assets/img/arrow2.png";
import Rectangle1 from "../assets/HeadShot/Rectangle1.png";
import Rectangle2 from "../assets/HeadShot/Rectangle2.png";
import Rectangle3 from "../assets/HeadShot/Rectangle3.png";
import Rectangle4 from "../assets/HeadShot/Rectangle4.png";
import Rectangle5 from "../assets/HeadShot/Rectangle5.png";
const Section = styled.section`
  padding: 80px 48px;
  background-color: #f0f0f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionContent = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const BeforeAfterCard = styled.div`
  width: 623px;
  height: 592px;
  border-radius: 27px;
  background-color: #e1e4f1;
  position: relative;
`;

const BeforeHeadshotImage = styled.img`
  position: absolute;
  width: 209px;
  height: 374px;
  bottom: 23px;
  left: 36px;
  border-radius: 24px;
  border: 1px solid #000;
`;

const AfterHeadshotImage = styled.img`
  position: absolute;
  width: 300px;
  height: 533px;
  top: 36px;
  right: 36px;
  border-radius: 24px;
  border: 1px solid #000;
`;
const ArrowIcon = styled.img`
  width: 160px;
  height: 160px;
  position: absolute;
  top: 44px;
  left: 123px;
  transform: rotate(-8.26deg);
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-family: Poppins, sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 24px;
  line-height: 1.2;
`;

const SectionDescription = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
  line-height: 1.6;
  max-width: 500px;
`;

const CTAButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: linear-gradient(90deg, #9f7aea 0%, #6b8afd 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(159, 122, 234, 0.3);
  width: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(159, 122, 234, 0.4);
  }
`;

const StarIcon = styled.span`
  font-size: 20px;
  line-height: 1;
`;

const ExampleCardsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

const ExampleCard = styled.div`
  width: 152px;
  height: 270px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
`;

const ExampleImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeadShot = () => {
  return (
    <Section>
      <SectionContent>
        <LeftContent>
          <BeforeAfterCard>
            <BeforeHeadshotImage src={Rectangle1} alt="Before headshot" />
            <ArrowIcon src={arrowImg} alt="arrow" />
            <AfterHeadshotImage src={Rectangle2} alt="After headshot" />
          </BeforeAfterCard>
        </LeftContent>
        <RightContent>
          <SectionTitle>HeadShot</SectionTitle>
          <SectionDescription>
            Quickly create professional headshots without the hassle of
            traditional photoshoots, presenting a perfect image.
          </SectionDescription>
          <CTAButton>
            <StarIcon>✦</StarIcon>
            <span>Create Professional Headshot</span>
          </CTAButton>
          <ExampleCardsContainer>
            <ExampleCard>
              <ExampleImage src={Rectangle3} alt="Example headshot 1" />
            </ExampleCard>
            <ExampleCard>
              <ExampleImage src={Rectangle4} alt="Example headshot 2" />
            </ExampleCard>
            <ExampleCard>
              <ExampleImage src={Rectangle5} alt="Example headshot 3" />
            </ExampleCard>
          </ExampleCardsContainer>
        </RightContent>
      </SectionContent>
    </Section>
  );
};
