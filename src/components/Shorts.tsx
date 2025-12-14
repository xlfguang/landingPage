import styled from "styled-components";
import phoneBg from "../assets/img/phonebg.png";
const Section = styled.section`
  padding: 80px 48px;
  background: linear-gradient(180deg, #f5f0f8 0%, #e8d5f0 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionContent = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-family: Playfair Display, serif;
  font-size: 60px;
  font-weight: 400;
  color: #2d2d2d;
  margin-bottom: 16px;
  text-align: center;
`;

const SectionDescription = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
  text-align: center;
  max-width: 700px;
  line-height: 1.6;
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
  margin-bottom: 48px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(159, 122, 234, 0.4);
  }
`;

const StarIcon = styled.span`
  font-size: 20px;
  line-height: 1;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const VideoCard = styled.div`
  width: 240px;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2px);
`;

const PlayButton = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 14px solid #333;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    margin-left: 4px;
  }
`;

const PhoneFrame = styled.div`
  width: 360px;
  height: 640px;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`;

const PhoneBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const PhoneScreen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  background: #000000;
  z-index: 2;
`;

const PhoneImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2px);
`;

const PhonePlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 16px solid #333;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    margin-left: 4px;
  }
`;

export const Shorts = () => {
  return (
    <Section>
      <SectionContent>
        <SectionTitle>Shorts</SectionTitle>
        <SectionDescription>
          Quickly generate stunning short videos to boost brand promotion and
          easily attract attention.
        </SectionDescription>
        <CTAButton>
          <StarIcon>✦</StarIcon>
          <span>Create Short Videos Now</span>
        </CTAButton>
        <CardsContainer>
          <VideoCard>
            <CardImage
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80"
              alt="Short video 1"
            />
            <PlayButton />
          </VideoCard>
          <PhoneFrame>
            <PhoneBg src={phoneBg} alt="Phone frame" />
            <PhoneScreen>
              <PhoneImage
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80"
                alt="Short video center"
              />
              <PhonePlayButton />
            </PhoneScreen>
          </PhoneFrame>
          <VideoCard>
            <CardImage
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80"
              alt="Short video 2"
            />
            <PlayButton />
          </VideoCard>
        </CardsContainer>
      </SectionContent>
    </Section>
  );
};
