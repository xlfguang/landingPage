import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import phoneBg from "../assets/img/phonebg.png";
import ImgLike from "../assets/img/Like.png";
import ImgLove from "../assets/img/Love.gif";
import ImgPlay from "../assets/img/play.png";
import MagicWand from "../assets/img/MagicWand.png";
import ImgHouseTour1 from "../assets/HouseTour/HouseTour1.png";
import ImgHouseTour3 from "../assets/HouseTour/HouseTour3.png";
import VideoHouseTour1 from "../assets/HouseTour/HouseTour1.mp4";
import VideoHouseTour2 from "../assets/HouseTour/HouseTour2.mp4";
import VideoHouseTour3 from "../assets/HouseTour/HouseTour3.mp4";
const Section = styled.section`
  padding: 80px 0px;
  background-color: #edf0fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

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
  flex-direction: column;
  align-items: center;
  padding: 0 16px;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 24px;
  }

  @media (min-width: 1025px) {
    padding: 0 32px;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 60px;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 12px;
  color: #141414;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 8px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 48px;
  }
`;

const SectionDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  color: #141414;
  max-width: 670px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 8px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 20px;
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
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(141, 103, 255, 0.4);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
    margin-bottom: 24px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 11px 18px;
    font-size: 15px;
    margin-bottom: 36px;
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

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    /* 手机端：允许溢出显示 */
    overflow: visible;
    gap: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 20px;
  }

  @media (min-width: 1025px) {
    gap: 24px;
  }
`;

const VideoCard = styled.div<{ $position: "left" | "right" }>`
  width: 248px;
  height: 440px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;

  @media (max-width: 768px) {
    position: absolute;
    width: 130px;
    height: auto;
    aspect-ratio: 9 / 16;
    border-radius: 20px;
    top: 50%;
    ${({ $position }) =>
      $position === "left"
        ? "left: 0; transform: translateX(-50%) translateY(-50%);"
        : "right: 0; transform: translateX(50%) translateY(-50%);"}
    z-index: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 180px;
    height: auto;
    aspect-ratio: 248 / 440;
    border-radius: 20px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  border: 2px solid rgba(255, 255, 255, 0.32);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    bottom: 12px;
    left: 12px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 50px;
    height: 50px;
    bottom: 16px;
    left: 16px;
  }
`;

const PlayIcon = styled.img`
  width: 22px;
  height: 26px;
  transform: translateX(2px);

  @media (max-width: 768px) {
    width: 14px;
    height: 16px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 18px;
    height: 22px;
  }
`;

const PhoneWrapper = styled.div`
  position: relative;
  z-index: 1;
  flex-shrink: 0;
`;

const PhoneFrame = styled.div`
  width: 356px;
  height: 568px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 200px;
    height: auto;
    aspect-ratio: 356 / 568;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 300px;
    height: auto;
    aspect-ratio: 356 / 568;
  }
`;

const PhoneBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
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

  @media (max-width: 768px) {
    width: 81.5%;
    height: 95%;
    border-radius: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 81.5%;
    height: 95%;
    border-radius: 30px;
  }
`;

const PhoneVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// 全屏模态框
const VideoModal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalVideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ModalVideo = styled.video`
  width: 100%;
  height: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 16px;

  @media (max-width: 768px) {
    border-radius: 0;
    max-height: 100vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fff;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const LikeButton = styled.img`
  position: absolute;
  width: 66px;
  height: 66px;
  bottom: 65px;
  right: 30px;
  z-index: 10;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    bottom: 30px;
    right: 18px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 56px;
    height: 56px;
    bottom: 55px;
    right: 25px;
  }
`;

const LoveGif = styled.img`
  width: 320px;
  height: 320px;
  position: absolute;
  bottom: 40px;
  right: -90px;
  z-index: 10;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    bottom: 15px;
    right: -40px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 260px;
    height: 260px;
    bottom: 35px;
    right: -70px;
  }
`;

export const Shorts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = (videoSrc: string) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  // 播放模态框中的视频
  useEffect(() => {
    if (isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.play();
    }
  }, [isModalOpen, currentVideo]);

  // ESC 键关闭
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
          <VideoCard $position="left">
            <CardImage src={ImgHouseTour1} alt="Short video 1" />
            <PlayButton onClick={() => handlePlayVideo(VideoHouseTour1)}>
              <PlayIcon src={ImgPlay} alt="Play" />
            </PlayButton>
          </VideoCard>
          <PhoneWrapper>
            <PhoneFrame>
              <PhoneBg src={phoneBg} alt="Phone frame" />
              <PhoneScreen>
                <PhoneVideo
                  src={VideoHouseTour2}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </PhoneScreen>
            </PhoneFrame>
            <LikeButton src={ImgLike} alt="Like" />
            <LoveGif src={ImgLove} alt="Love" />
          </PhoneWrapper>
          <VideoCard $position="right">
            <CardImage src={ImgHouseTour3} alt="Short video 2" />
            <PlayButton onClick={() => handlePlayVideo(VideoHouseTour3)}>
              <PlayIcon src={ImgPlay} alt="Play" />
            </PlayButton>
          </VideoCard>
        </CardsContainer>
      </SectionContent>

      {/* 全屏视频模态框 */}
      <VideoModal $isOpen={isModalOpen} onClick={handleCloseModal}>
        <ModalVideoContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleCloseModal} />
          <ModalVideo
            ref={modalVideoRef}
            src={currentVideo}
            controls
            playsInline
            autoPlay
          />
        </ModalVideoContainer>
      </VideoModal>
    </Section>
  );
};
