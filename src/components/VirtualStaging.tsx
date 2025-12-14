import React, { useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  gap: 60px;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  max-width: 500px;
`;

const SectionTitle = styled.h2`
  font-family: Playfair Display;
  font-size: 60px;
  font-weight: 400;
  line-height: 72px;
  color: #141414;
  margin-bottom: 24px;
  text-align: left;
`;

const SectionDescription = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: #666666;
  margin-bottom: 40px;
  text-align: left;
`;

const CTAButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: linear-gradient(90deg, #8d67ff 0%, #367cff 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(141, 103, 255, 0.4);
  }
`;

const StarIcon = styled.span`
  font-size: 20px;
  line-height: 1;
`;

const GlobalSliderStyles = createGlobalStyle`
  .virtual-staging-slider {
    .slick-list {
      overflow: hidden;
      width: 770px !important;
    }
    
    .slick-slide {
      width: 770px !important;
      min-width: 770px !important;
      max-width: 770px !important;
    }
    
    .slick-slide[style*="width"] {
      width: 770px !important;
    }
  }
`;

const RightContent = styled.div`
  flex: 1;
  max-width: 770px;
  display: flex;
  justify-content: center;
`;

const SliderContainer = styled.div`
  width: 770px;
  margin: 0 auto;

  .slick-slider {
    position: relative;
    width: 770px;
  }

  .slick-list {
    overflow: hidden;
    width: 770px;
  }

  .slick-slide {
    width: 770px !important;
    min-width: 770px !important;
    max-width: 770px !important;
    margin: 0 !important;
    padding: 0 !important;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 770px !important;
      height: 434px !important;
    }
  }

  .slick-dots {
    bottom: -24px;
    position: absolute;
    width: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 8px;

    li {
      width: auto;
      height: 6px;
      margin: 0;

      button {
        width: 24px;
        height: 6px;
        padding: 0;
        border-radius: 3px;
        background: #e0e0e0;
        border: none;
        cursor: pointer;
        font-size: 0;
        line-height: 0;
        transition: width 0.3s ease, background 0.3s ease;

        &::before {
          display: none;
        }
      }

      &.slick-active button {
        background: #367cff;
        width: 60px;
      }
    }
  }
`;

const ComparisonContainer = styled.div`
  position: relative;
  width: 770px;
  height: 434px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #a8d5ff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  cursor: col-resize;
  user-select: none;
  flex-shrink: 0;

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    pointer-events: none;
  }
`;

const BeforeImage = styled.div<{ $bgImage: string; $clipPath: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  clip-path: inset(0 ${(props) => 100 - props.$clipPath}% 0 0);
`;

const AfterImage = styled.div<{ $bgImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
`;

const BeforeLabel = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  z-index: 10;
`;

const AfterLabel = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  z-index: 10;
`;

const SliderHandle = styled.img<{ $position: number }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.$position}%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  z-index: 20;
  cursor: col-resize;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  pointer-events: auto !important;
`;

const SliderLine = styled.div<{ $position: number }>`
  position: absolute;
  top: 0;
  left: ${(props) => props.$position}%;
  width: 2px;
  height: 100%;
  background: white;
  z-index: 15;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;

interface BeforeAfterSlideProps {
  beforeImage: string;
  afterImage: string;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

const BeforeAfterSlide: React.FC<BeforeAfterSlideProps> = ({
  beforeImage,
  afterImage,
  onDragStart,
  onDragEnd,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSliderPosition = (e: MouseEvent | React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updateSliderPosition(e);
    onDragStart?.();
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        updateSliderPosition(e);
      }
    };

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        onDragEnd?.();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [onDragStart, onDragEnd]);

  const handleImageDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  return (
    <ComparisonContainer ref={containerRef} onMouseDown={handleMouseDown}>
      <AfterImage $bgImage={afterImage} />
      <BeforeImage $bgImage={beforeImage} $clipPath={sliderPosition} />
      <SliderLine $position={sliderPosition} />
      <SliderHandle
        $position={sliderPosition}
        src={arrowImg}
        alt="arrow"
        draggable={false}
        onDragStart={handleImageDragStart}
        onMouseDown={(e) => {
          e.stopPropagation();
          handleMouseDown(e);
        }}
      />
      <BeforeLabel>Before</BeforeLabel>
      <AfterLabel>After</AfterLabel>
    </ComparisonContainer>
  );
};

const comparisonData = [
  {
    id: 1,
    before: before01,
    after: after01,
  },
  {
    id: 2,
    before: before02,
    after: after02,
  },
  {
    id: 3,
    before: before03,
    after: after03,
  },
  {
    id: 4,
    before: before04,
    after: after04,
  },
  {
    id: 5,
    before: before05,
    after: after05,
  },
];

export const VirtualStaging = () => {
  const sliderRef = useRef<Slider>(null);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    swipe: false,
    draggable: false,
    touchMove: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: false,
    variableWidth: false,
  };

  React.useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current as Slider & {
        slickPause: () => void;
        slickPlay: () => void;
      };
      if (isAutoPlayPaused) {
        slider.slickPause();
      } else {
        slider.slickPlay();
      }
    }
  }, [isAutoPlayPaused]);

  const handleDragStart = () => {
    setIsAutoPlayPaused(true);
  };

  const handleDragEnd = () => {
    setIsAutoPlayPaused(false);
  };

  return (
    <Section>
      <GlobalSliderStyles />
      <SectionContent>
        <LeftContent>
          <SectionTitle>Virtual Staging</SectionTitle>
          <SectionDescription>
            Transform empty rooms instantly with virtual staging, creating the
            ideal home effortlessly.
          </SectionDescription>
          <CTAButton>
            <StarIcon>✦</StarIcon>
            <span>Start Virtual Staging Now</span>
          </CTAButton>
        </LeftContent>
        <RightContent>
          <SliderContainer>
            <Slider
              ref={sliderRef}
              {...sliderSettings}
              className="virtual-staging-slider"
            >
              {comparisonData.map((item) => (
                <div key={item.id}>
                  <BeforeAfterSlide
                    beforeImage={item.before}
                    afterImage={item.after}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                  />
                </div>
              ))}
            </Slider>
          </SliderContainer>
        </RightContent>
      </SectionContent>
    </Section>
  );
};
