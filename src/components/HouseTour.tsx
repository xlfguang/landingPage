import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import magicWand2 from "../assets/img/MagicWand2.png";

import ImgHouseTour1 from "../assets/HouseTour/HouseTour1.png";
import ImgHouseTour2 from "../assets/HouseTour/HouseTour2.png";
import ImgHouseTour3 from "../assets/HouseTour/HouseTour3.png";
import ImgHouseTour4 from "../assets/HouseTour/HouseTour4.png";
import ImgHouseTour5 from "../assets/HouseTour/HouseTour5.png";
import ImgHouseTour6 from "../assets/HouseTour/HouseTour6.png";
import ImgHouseTour7 from "../assets/HouseTour/HouseTour7.png";
import ImgHouseTour8 from "../assets/HouseTour/HouseTour8.png";
import ImgHouseTour9 from "../assets/HouseTour/HouseTour9.png";
import ImgHouseTour10 from "../assets/HouseTour/HouseTour10.png";

import VideoHouseTour1 from "../assets/HouseTour/HouseTour1.mp4";
import VideoHouseTour2 from "../assets/HouseTour/HouseTour2.mp4";
import VideoHouseTour3 from "../assets/HouseTour/HouseTour3.mp4";
import VideoHouseTour4 from "../assets/HouseTour/HouseTour4.mp4";
import VideoHouseTour5 from "../assets/HouseTour/HouseTour5.mp4";
import VideoHouseTour6 from "../assets/HouseTour/HouseTour6.mp4";
import VideoHouseTour7 from "../assets/HouseTour/HouseTour7.mp4";
import VideoHouseTour8 from "../assets/HouseTour/HouseTour8.mp4";
import VideoHouseTour9 from "../assets/HouseTour/HouseTour9.mp4";
import VideoHouseTour10 from "../assets/HouseTour/HouseTour10.mp4";

// ==================== 样式组件 ====================

const Section = styled.section`
  padding: 80px 0;
  background-color: #edf0fa;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 60px;
  line-height: 1.2;
  text-align: center;
  color: #141414;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 8px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 48px;
  }
`;

const SectionDescription = styled.p`
  max-width: 708px;
  margin: 0 auto 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  color: #141414;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 32px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 560px;
  perspective: 1000px;

  @media (max-width: 768px) {
    min-height: 380px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    min-height: 460px;
  }
`;

const CarouselTrack = styled.div<{ $isAnimating: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  transition: ${({ $isAnimating }) =>
    $isAnimating ? "none" : "all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)"};

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 16px;
  }
`;

const CardWrapper = styled.div<{ $position: number; $total: number }>`
  flex-shrink: 0;
  transition: all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: ${({ $position }) => {
    const absPos = Math.abs($position);
    if (absPos === 0) return 1;
    if (absPos === 1) return 0.9;
    if (absPos === 2) return 0.75;
    return 0.6;
  }};
  transform: ${({ $position }) => {
    if ($position === 0) return "scale(1) translateZ(0)";
    const scale = 1 - Math.abs($position) * 0.05;
    const translateZ = -Math.abs($position) * 30;
    return `scale(${scale}) translateZ(${translateZ}px)`;
  }};
  cursor: pointer;
  z-index: ${({ $position }) => 10 - Math.abs($position)};
  filter: ${({ $position }) =>
    $position === 0 ? "none" : `brightness(${1 - Math.abs($position) * 0.1})`};

  &:hover {
    opacity: ${({ $position }) => ($position === 0 ? 1 : 0.95)};
  }
`;

const Card = styled.div<{ $isActive: boolean }>`
  width: ${({ $isActive }) => ($isActive ? "300px" : "243px")};
  height: ${({ $isActive }) => ($isActive ? "533px" : "431px")};
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transition: all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${({ $isActive }) =>
    $isActive
      ? "0 20px 60px rgba(0, 0, 0, 0.25)"
      : "0 8px 32px rgba(0, 0, 0, 0.15)"};

  @media (max-width: 768px) {
    width: ${({ $isActive }) => ($isActive ? "200px" : "140px")};
    height: ${({ $isActive }) => ($isActive ? "355px" : "249px")};
    border-radius: 14px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: ${({ $isActive }) => ($isActive ? "240px" : "180px")};
    height: ${({ $isActive }) => ($isActive ? "426px" : "320px")};
    border-radius: 16px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const UseItBtn = styled.button<{ $isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(268.49deg, #367cff 0%, #8d67ff 100%);
  height: 56px;
  border-radius: 32px;
  padding: 8px 24px;
  border: 6px solid rgba(255, 255, 255, 0.32);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  z-index: 10;
  transition: opacity 0.3s ease, box-shadow 0.3s ease;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};

  &:hover {
    box-shadow: 0 8px 24px rgba(141, 103, 255, 0.5);
  }

  @media (max-width: 768px) {
    height: 44px;
    padding: 6px 16px;
    border-width: 4px;
    gap: 6px;
  }
`;

const UseItBtnText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1;
  color: #ffffff;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const UseItBtnIcon = styled.img`
  width: 28px;
  height: 28px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const CardVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const CardMedia = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

// ==================== 数据 ====================

const houseTourData = [
  { id: 1, img: ImgHouseTour1, video: VideoHouseTour1 },
  { id: 2, img: ImgHouseTour2, video: VideoHouseTour2 },
  { id: 3, img: ImgHouseTour3, video: VideoHouseTour3 },
  { id: 4, img: ImgHouseTour4, video: VideoHouseTour4 },
  { id: 5, img: ImgHouseTour5, video: VideoHouseTour5 },
  { id: 6, img: ImgHouseTour6, video: VideoHouseTour6 },
  { id: 7, img: ImgHouseTour7, video: VideoHouseTour7 },
  { id: 8, img: ImgHouseTour8, video: VideoHouseTour8 },
  { id: 9, img: ImgHouseTour9, video: VideoHouseTour9 },
  { id: 10, img: ImgHouseTour10, video: VideoHouseTour10 },
];

// ==================== 主组件 ====================

export const HouseTour: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // 响应式调整可见卡片数量
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(3);
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // 自动轮播
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % houseTourData.length);
      }, 3500);
    };

    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  // 获取要显示的卡片
  const getVisibleCards = () => {
    const half = Math.floor(visibleCount / 2);
    const cards = [];
    const total = houseTourData.length;

    for (let i = -half; i <= half; i++) {
      const index = (currentIndex + i + total) % total;
      cards.push({
        ...houseTourData[index],
        position: i,
        originalIndex: index,
      });
    }

    return cards;
  };

  const handleCardClick = (originalIndex: number, position: number) => {
    if (position === 0) return; // 已经是活跃卡片

    // 重置自动轮播
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);

    setIsAnimating(true);
    setCurrentIndex(originalIndex);

    setTimeout(() => setIsAnimating(false), 100);

    // 重新开始自动轮播
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % houseTourData.length);
    }, 3500);
  };

  const visibleCards = getVisibleCards();
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // 控制视频播放
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, videoEl]) => {
      if (videoEl) {
        const cardId = parseInt(id);
        const isActive = houseTourData[currentIndex]?.id === cardId;
        if (isActive) {
          videoEl.currentTime = 0;
          videoEl.play().catch(() => {});
        } else {
          videoEl.pause();
        }
      }
    });
  }, [currentIndex]);

  return (
    <Section>
      <SectionTitle>House Tour</SectionTitle>
      <SectionDescription>
        Easily create property tour videos and instantly showcase the unique
        charm of each space.
      </SectionDescription>

      <CarouselContainer>
        <CarouselTrack $isAnimating={isAnimating}>
          {visibleCards.map((card) => {
            const isActive = card.position === 0;

            return (
              <CardWrapper
                key={`${card.id}-${card.position}`}
                $position={card.position}
                $total={visibleCount}
                onClick={() =>
                  handleCardClick(card.originalIndex, card.position)
                }
              >
                <Card $isActive={isActive}>
                  <CardMedia>
                    <CardImage src={card.img} alt={`House Tour ${card.id}`} />
                    {isActive && (
                      <CardVideo
                        ref={(el) => {
                          videoRefs.current[card.id] = el;
                        }}
                        src={card.video}
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                    )}
                  </CardMedia>
                  <UseItBtn $isVisible={isActive}>
                    <UseItBtnIcon src={magicWand2} alt="" />
                    <UseItBtnText>Use It</UseItBtnText>
                  </UseItBtn>
                </Card>
              </CardWrapper>
            );
          })}
        </CarouselTrack>
      </CarouselContainer>
    </Section>
  );
};
