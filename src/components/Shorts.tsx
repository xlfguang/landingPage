import styled from "styled-components";
import phoneBg from "../assets/img/phonebg.png";
import ImgLike from "../assets/img/Like.png";
import ImgLove from "../assets/img/Love.gif";
import ImgPlay from "../assets/img/play.png";
import MagicWand from "../assets/img/MagicWand.png";
const Section = styled.section`
  padding: 80px 0px;
  background-color: #edf0fa;
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
  font-family: Playfair Display;
  font-weight: 400;
  font-style: Regular;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 12px;
  color: #141414;
`;

const SectionDescription = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-style: Regular;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: #141414;
  width: 670px;
  height: 72px;
  line-height: 36px;
  text-align: center;
  vertical-align: middle;
  color: #141414;
  width: 670px;
  height: 72px;
  line-height: 36px;
  margin-bottom: 12px;
`;

const CTAButton = styled.button`
  padding: 12px 16px;
  background: linear-gradient(268.49deg, #367cff 0%, #8d67ff 100%);
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  border-radius: 38px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
`;

const StarIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const VideoCard = styled.div`
  width: 248px;
  height: 440px;
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
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border: 2px solid #ffffff52;
  border-radius: 50%;
  background: #00000066;
`;
const PlayIcon = styled.img`
  width: 22px;
  height: 26px;
  transform: translate(10%, 0%);
`;
const LikeButton = styled.img`
  position: absolute;
  width: 66px;
  height: 66px;
  bottom: 55px;
  right: 25px;
  z-index: 10;
`;
const LoveGif = styled.img`
  width: 376px;
  height: 376px;
  position: absolute;
  bottom: 55px;
  right: -115px;
  z-index: 10;
`;

const PhoneFrame = styled.div`
  width: 356px;
  height: 568px;
  position: relative;
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
  width: 290px;
  height: 540px;
  border-radius: 35px;
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
          <StarIcon src={MagicWand} alt="Magic Wand" />
          Create Short Videos Now
        </CTAButton>
        <CardsContainer>
          <VideoCard>
            <CardImage
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80"
              alt="Short video 1"
            />
            <PlayButton>
              <PlayIcon src={ImgPlay} alt="Play" />
            </PlayButton>
          </VideoCard>
          <PhoneFrame>
            <PhoneBg src={phoneBg} alt="Phone frame" />
            <PhoneScreen>
              <PhoneImage
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80"
                alt="Short video center"
              />
            </PhoneScreen>
            <LikeButton src={ImgLike} alt="Like" />
            <LoveGif src={ImgLove} alt="Love" />
          </PhoneFrame>
          <VideoCard>
            <CardImage
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80"
              alt="Short video 2"
            />
            <PlayButton>
              <PlayIcon src={ImgPlay} alt="Play" />
            </PlayButton>
          </VideoCard>
        </CardsContainer>
      </SectionContent>
    </Section>
  );
};
