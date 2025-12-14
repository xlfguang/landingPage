import React, { useState, useRef, useCallback, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import after01 from "../assets/VirtualStaging/after01.jpg";
import after02 from "../assets/VirtualStaging/after02.jpg";
import after03 from "../assets/VirtualStaging/after03.jpg";
import after04 from "../assets/VirtualStaging/after04.jpg";
import after05 from "../assets/VirtualStaging/after05.jpg";
import before01 from "../assets/VirtualStaging/before01.jpg";
import before02 from "../assets/VirtualStaging/before02.jpg";
import before03 from "../assets/VirtualStaging/before03.jpg";
import before04 from "../assets/VirtualStaging/before04.jpg";
import before05 from "../assets/VirtualStaging/before05.jpg";
import arrowImg from "../assets/img/arrow.png";
import MagicWand from "../assets/img/MagicWand.png";

// ==================== 动画 ====================

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.02);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// ==================== 样式组件 ====================

const Section = styled.section`
  padding: 80px 0;
  background-color: #edf0fa;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
    padding: 0 16px;
  }
`;

const LeftContent = styled.div`
  flex-shrink: 0;
  max-width: 400px;

  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: 400;
  line-height: 1.2;
  color: #141414;
  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 12px;
  }
`;

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: #666;
  margin: 0 0 40px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: linear-gradient(90deg, #8d67ff 0%, #367cff 100%);
  color: white;
  border: none;
  border-radius: 40px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(141, 103, 255, 0.4);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const RightContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

// ==================== 对比图组件样式 ====================

const ComparisonWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  position: relative;
`;

const SlidesContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
`;

const SlideItem = styled.div<{
  $isActive: boolean;
  $direction: "next" | "prev" | null;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
  transform: ${({ $isActive, $direction }) => {
    if ($isActive) return "translateX(0) scale(1)";
    if ($direction === "next") return "translateX(100%) scale(0.95)";
    if ($direction === "prev") return "translateX(-100%) scale(0.95)";
    return "translateX(0) scale(0.95)";
  }};
  animation: ${({ $isActive }) => ($isActive ? fadeIn : "none")} 0.8s ease-out;
`;

const ComparisonBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: ew-resize;
  user-select: none;
`;

const ImageBase = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const AfterImageLayer = styled(ImageBase)<{ $src: string }>`
  background-image: url(${(props) => props.$src});
  z-index: 1;
`;

const BeforeImageLayer = styled(ImageBase)<{ $src: string; $position: number }>`
  background-image: url(${(props) => props.$src});
  clip-path: inset(0 ${(props) => 100 - props.$position}% 0 0);
  z-index: 2;
  transition: clip-path 0.05s ease-out;
`;

const DividerLine = styled.div<{ $position: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.$position}%;
  width: 3px;
  background: white;
  z-index: 10;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
  transform: translateX(-50%);
  transition: left 0.05s ease-out;
`;

const DividerHandle = styled.div<{ $position: number }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.$position}%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  z-index: 11;
  cursor: ew-resize;
  transition: left 0.05s ease-out, transform 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Label = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 20px;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;
  z-index: 5;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
  animation: ${slideIn} 0.5s ease-out;

  @media (max-width: 768px) {
    top: 12px;
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const BeforeLabel = styled(Label)`
  left: 20px;

  @media (max-width: 768px) {
    left: 12px;
  }
`;

const AfterLabel = styled(Label)`
  right: 20px;

  @media (max-width: 768px) {
    right: 12px;
  }
`;

// ==================== 分页点样式 ====================

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 24px;

  @media (max-width: 768px) {
    margin-top: 16px;
    gap: 8px;
  }
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${(props) => (props.$active ? "48px" : "24px")};
  height: 6px;
  border-radius: 3px;
  border: none;
  background: ${(props) => (props.$active ? "#367cff" : "#d0d0d0")};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  padding: 0;

  &:hover {
    background: ${(props) => (props.$active ? "#367cff" : "#b0b0b0")};
    transform: scaleY(1.2);
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.$active ? "36px" : "16px")};
    height: 4px;
  }
`;

// ==================== 数据 ====================

const comparisonData = [
  { id: 1, before: before01, after: after01 },
  { id: 2, before: before02, after: after02 },
  { id: 3, before: before03, after: after03 },
  { id: 4, before: before04, after: after04 },
  { id: 5, before: before05, after: after05 },
];

// ==================== 对比图组件 ====================

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  isActive: boolean;
  onInteractionStart: () => void;
  onInteractionEnd: () => void;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  beforeImage,
  afterImage,
  isActive,
  onInteractionStart,
  onInteractionEnd,
}) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // 当切换到新的 slide 时，重置滑块位置
  useEffect(() => {
    if (isActive) {
      setPosition(50);
    }
  }, [isActive, beforeImage]);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const newPosition = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(newPosition);
  }, []);

  const handleStart = useCallback(
    (clientX: number) => {
      isDragging.current = true;
      onInteractionStart();
      updatePosition(clientX);
    },
    [updatePosition, onInteractionStart]
  );

  const handleMove = useCallback(
    (clientX: number) => {
      if (isDragging.current) {
        updatePosition(clientX);
      }
    },
    [updatePosition]
  );

  const handleEnd = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
      onInteractionEnd();
    }
  }, [onInteractionEnd]);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", handleEnd);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [handleMove, handleEnd]);

  return (
    <ComparisonBox
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <AfterImageLayer $src={afterImage} />
      <BeforeImageLayer $src={beforeImage} $position={position} />
      <DividerLine $position={position} />
      <DividerHandle $position={position}>
        <img src={arrowImg} alt="drag" draggable={false} />
      </DividerHandle>
      <BeforeLabel $isVisible={isActive}>Before</BeforeLabel>
      <AfterLabel $isVisible={isActive}>After</AfterLabel>
    </ComparisonBox>
  );
};

// ==================== 主组件 ====================

export const VirtualStaging: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) => (prev + 1) % comparisonData.length);
    }, 5000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isPaused, startAutoPlay, stopAutoPlay]);

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
    startAutoPlay();
  };

  const handleInteractionStart = () => {
    setIsPaused(true);
    stopAutoPlay();
  };

  const handleInteractionEnd = () => {
    setIsPaused(false);
  };

  return (
    <Section>
      <Container>
        <LeftContent>
          <Title>Virtual Staging</Title>
          <Description>
            Transform empty rooms instantly with virtual staging, creating the
            ideal home effortlessly.
          </Description>
          <CTAButton>
            <ButtonIcon src={MagicWand} alt="" />
            <span>Start Virtual Staging Now</span>
          </CTAButton>
        </LeftContent>

        <RightContent>
          <ComparisonWrapper>
            <SlidesContainer>
              {comparisonData.map((item, index) => (
                <SlideItem
                  key={item.id}
                  $isActive={index === currentIndex}
                  $direction={direction}
                >
                  <ComparisonSlider
                    beforeImage={item.before}
                    afterImage={item.after}
                    isActive={index === currentIndex}
                    onInteractionStart={handleInteractionStart}
                    onInteractionEnd={handleInteractionEnd}
                  />
                </SlideItem>
              ))}
            </SlidesContainer>
            <DotsContainer>
              {comparisonData.map((item, index) => (
                <Dot
                  key={item.id}
                  $active={index === currentIndex}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </DotsContainer>
          </ComparisonWrapper>
        </RightContent>
      </Container>
    </Section>
  );
};
