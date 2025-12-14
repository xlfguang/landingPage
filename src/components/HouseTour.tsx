import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  font-family: Playfair Display;
  font-weight: 400;
  font-style: Regular;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: 0;
  text-align: center;
  color: #141414;
  margin-bottom: 12px;
`;

const SectionDescription = styled.p`
  max-width: 708px;
  text-align: center;
  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0;
  color: #141414;
  margin: 0 auto;
  height: 72px;
  line-height: 36px;
`;

// 轮播容器
const SliderContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 0;
  overflow: hidden;
`;

// 卡片容器（现在用于包裹轮播）
const CardsContainer = styled.div`
  position: relative;

  /* 覆盖 react-slick 的默认样式 */
  .slick-slider {
    position: relative;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    display: flex;
    align-items: center;
    padding: 20px 0;
  }

  .slick-slide {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    margin: 0 12px; /* 每个卡片左右各12px，总共24px间距 */
    box-sizing: border-box;
    width: auto !important; /* 让 slide 宽度自适应内容 */

    /* 中间的激活卡片 */
    &.slick-center,
    &.slick-current {
      z-index: 2;
      opacity: 1;
    }

    /* 所有非激活卡片 */
    &:not(.slick-center):not(.slick-current) {
      opacity: 0.7;
    }
  }
`;

const Card = styled.div.attrs({ className: "house-tour-card" })<{
  isActive: boolean;
}>`
  width: ${({ isActive }) => (isActive ? "300px" : "243px")};
  height: ${({ isActive }) => (isActive ? "533px" : "431px")};
  border-radius: 19px;
  overflow: hidden;
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 0 auto;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-grow: 0;
`;

// 全局样式，确保活跃卡片尺寸正确
const GlobalSliderStyles = createGlobalStyle`
  /* 活跃卡片样式 */
  .slick-slide.slick-center > div.house-tour-card,
  .slick-slide.slick-center .house-tour-card,
  .slick-slide.slick-center > div,
  .slick-slide.slick-center div[class*="house-tour-card"] {
    width: 300px !important;
    height: 533px !important;
    max-width: 300px !important;
    min-width: 300px !important;
    box-sizing: border-box !important;
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }
  
  /* 非活跃卡片样式 */
  .slick-slide:not(.slick-center) > div.house-tour-card,
  .slick-slide:not(.slick-center) .house-tour-card,
  .slick-slide:not(.slick-center) > div,
  .slick-slide:not(.slick-center) div[class*="house-tour-card"] {
    width: 243px !important;
    height: 431px !important;
    max-width: 243px !important;
    min-width: 243px !important;
    box-sizing: border-box !important;
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }
  
  /* 确保 slick-slide 本身不会限制宽度 */
  .slick-slide.slick-center {
    width: auto !important;
    max-width: none !important;
    min-width: auto !important;
  }
  
  .slick-slide:not(.slick-center) {
    width: auto !important;
    max-width: none !important;
    min-width: auto !important;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UseItBtn = styled.button<{ isActive: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(268.49deg, #367cff 0%, #8d67ff 100%);
  height: 48px;
  border-radius: 32px;
  padding: 8px 16px;
  border: 6px solid rgba(255, 255, 255, 0.32);
  display: none;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  z-index: 10;
  box-sizing: border-box;
  width: fit-content;
  min-width: fit-content;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 4px 16px rgba(141, 103, 255, 0.4);
  }
`;

// 通过 CSS 控制中间卡片显示按钮
const StyledSliderContainer = styled(CardsContainer)`
  .slick-slide.slick-center .use-it-btn,
  .slick-slide.slick-current .use-it-btn {
    display: flex !important;
  }
`;

const UseItBtnText = styled.span`
  font-family: Poppins;
  font-weight: 500;
  font-style: Medium;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  white-space: nowrap;
`;

const UseItBtnIcon = styled.img`
  width: 32px;
  height: 32px;
`;

// 主组件
export const HouseTour = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const houseTourData = [
    {
      id: 1,
      img: ImgHouseTour1,
      video: VideoHouseTour1,
    },
    {
      id: 2,
      img: ImgHouseTour2,
      video: VideoHouseTour2,
    },
    {
      id: 3,
      img: ImgHouseTour3,
      video: VideoHouseTour3,
    },
    {
      id: 4,
      img: ImgHouseTour4,
      video: VideoHouseTour4,
    },
    {
      id: 5,
      img: ImgHouseTour5,
      video: VideoHouseTour5,
    },
    {
      id: 6,
      img: ImgHouseTour6,
      video: VideoHouseTour6,
    },
    {
      id: 7,
      img: ImgHouseTour7,
      video: VideoHouseTour7,
    },
    {
      id: 8,
      img: ImgHouseTour8,
      video: VideoHouseTour8,
    },
    {
      id: 9,
      img: ImgHouseTour9,
      video: VideoHouseTour9,
    },
    {
      id: 10,
      img: ImgHouseTour10,
      video: VideoHouseTour10,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <Section>
      <GlobalSliderStyles />
      <SectionContent>
        <SectionTitle>House Tour</SectionTitle>
        <SectionDescription>
          Easily create property tour videos and instantly showcase the unique
          charm of each space.
        </SectionDescription>
      </SectionContent>
      <SliderContainer>
        <StyledSliderContainer>
          <Slider {...settings}>
            {houseTourData.map((item, index) => {
              const isActive = index === currentSlide;
              return (
                <Card key={item.id} isActive={isActive}>
                  <CardImage src={item.img} />
                  <CardVideo src={item.video} />
                  <UseItBtn isActive={isActive} className="use-it-btn">
                    <UseItBtnIcon src={magicWand2} />
                    <UseItBtnText>Use It</UseItBtnText>
                  </UseItBtn>
                </Card>
              );
            })}
          </Slider>
        </StyledSliderContainer>
      </SliderContainer>
    </Section>
  );
};
