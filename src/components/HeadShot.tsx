import styled from "styled-components";
import arrowImg from "../assets/img/arrow2.png";
import Rectangle1 from "../assets/HeadShot/Rectangle1.png";
import Rectangle2 from "../assets/HeadShot/Rectangle2.png";
import Rectangle3 from "../assets/HeadShot/Rectangle3.png";
import Rectangle4 from "../assets/HeadShot/Rectangle4.png";
import Rectangle5 from "../assets/HeadShot/Rectangle5.png";
import MagicWand from "../assets/img/MagicWand.png";

const Section = styled.section`
  padding: 80px 0px;
  background-color: #edf0fa;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 40px 0px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 60px 0px;
  }
`;

const SectionContent = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  gap: 60px;
  align-items: flex-start;
  padding: 0 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    padding: 0 16px;
    align-items: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
    padding: 0 24px;
    align-items: center;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    order: 2;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    order: 2;
    width: 100%;
  }
`;

const BeforeAfterCard = styled.div`
  width: 623px;
  height: 592px;
  border-radius: 27px;
  background-color: #e1e4f1;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 343px;
    height: auto;
    aspect-ratio: 343 / 326;
    border-radius: 16px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
    height: auto;
    aspect-ratio: 623 / 592;
    border-radius: 20px;
  }
`;

const BeforeHeadshotImage = styled.img`
  position: absolute;
  width: 209px;
  height: 374px;
  bottom: 23px;
  left: 36px;
  border-radius: 24px;
  border: 1px solid #000;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 35%;
    height: auto;
    aspect-ratio: 209 / 374;
    bottom: 5%;
    left: 5%;
    border-radius: 14px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 33%;
    height: auto;
    aspect-ratio: 209 / 374;
    bottom: 4%;
    left: 5%;
    border-radius: 20px;
  }
`;

const AfterHeadshotImage = styled.img`
  position: absolute;
  width: 300px;
  height: 533px;
  top: 36px;
  right: 36px;
  border-radius: 24px;
  border: 1px solid #000;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 48%;
    height: auto;
    aspect-ratio: 300 / 533;
    top: 5%;
    right: 5%;
    border-radius: 14px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 48%;
    height: auto;
    aspect-ratio: 300 / 533;
    top: 5%;
    right: 5%;
    border-radius: 20px;
  }
`;

const ArrowIcon = styled.img`
  width: 160px;
  height: 160px;
  position: absolute;
  top: 44px;
  left: 123px;
  transform: rotate(-8.26deg);

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    top: 8%;
    left: 18%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100px;
    height: 100px;
    top: 7%;
    left: 16%;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    order: 1;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    order: 1;
    align-items: center;
    width: 100%;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: 400;
  color: #141414;
  margin-bottom: 24px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
    margin-bottom: 12px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 48px;
    text-align: center;
    margin-bottom: 16px;
  }
`;

const SectionDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
  line-height: 1.6;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    margin-bottom: 16px;
    line-height: 1.5;
    max-width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
    text-align: center;
    margin-bottom: 24px;
    max-width: 600px;
  }
`;

const CTAButton = styled.button`
  padding: 12px 16px;
  background: linear-gradient(268.49deg, #367cff 0%, #8d67ff 100%);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  border-radius: 38px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(141, 103, 255, 0.4);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
    margin-bottom: 0;
    align-self: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 11px 18px;
    font-size: 15px;
    margin-bottom: 0;
    align-self: center;
  }
`;

const StarIcon = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

// PC端显示在右侧
const ExampleCardsDesktop = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

// 手机/平板端显示在对比图下方
const ExampleCardsMobile = styled.div`
  display: none;
  gap: 12px;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    gap: 14px;
  }
`;

const ExampleCard = styled.div`
  width: 152px;
  height: 270px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100px;
    height: auto;
    aspect-ratio: 152 / 270;
    border-radius: 12px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 120px;
    height: auto;
    aspect-ratio: 152 / 270;
    border-radius: 14px;
  }
`;

const ExampleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
          {/* 手机/平板端：示例卡片在对比图下方 */}
          <ExampleCardsMobile>
            <ExampleCard>
              <ExampleImage src={Rectangle3} alt="Example headshot 1" />
            </ExampleCard>
            <ExampleCard>
              <ExampleImage src={Rectangle4} alt="Example headshot 2" />
            </ExampleCard>
            <ExampleCard>
              <ExampleImage src={Rectangle5} alt="Example headshot 3" />
            </ExampleCard>
          </ExampleCardsMobile>
        </LeftContent>
        <RightContent>
          <SectionTitle>HeadShot</SectionTitle>
          <SectionDescription>
            Quickly create professional headshots without the hassle of
            traditional photoshoots, presenting a perfect image.
          </SectionDescription>
          <CTAButton>
            <StarIcon src={MagicWand} alt="Magic Wand" />
            <span>Start Virtual Staging Now</span>
          </CTAButton>
          {/* PC端：示例卡片在右侧按钮下方 */}
          <ExampleCardsDesktop>
            <ExampleCard>
              <ExampleImage src={Rectangle3} alt="Example headshot 1" />
            </ExampleCard>
            <ExampleCard>
              <ExampleImage src={Rectangle4} alt="Example headshot 2" />
            </ExampleCard>
            <ExampleCard>
              <ExampleImage src={Rectangle5} alt="Example headshot 3" />
            </ExampleCard>
          </ExampleCardsDesktop>
        </RightContent>
      </SectionContent>
    </Section>
  );
};
