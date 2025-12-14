import styled from "styled-components";
import logo from "../assets/img/logo.png";
import magicWand from "../assets/img/MagicWand.png";
import backGroundVideo from "../assets/video/background.mp4";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 775px) {
    min-height: 400px;
  }
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 41.56%,
    rgba(0, 0, 0, 0.85) 100%
  );
`;

const Logo = styled.img`
  width: 28px;
  height: 28px;

  @media (max-width: 775px) {
    width: 24px;
    height: 24px;
  }
`;

const CreatingBtn = styled.div`
  padding: 8px 16px;
  background: linear-gradient(268.49deg, #367cff 0%, #8d67ff 100%);
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #fff;

  @media (max-width: 775px) {
    padding: 6px 12px;
    gap: 6px;
  }
`;

const CreatingBtnText = styled.div`
  font-family: Poppins;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  color: #fff;

  @media (max-width: 775px) {
    font-size: 14px;
  }

  @media (min-width: 776px) and (max-width: 1439px) {
    font-size: 16px;
  }
`;

const CreatingBtnIcon = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 775px) {
    width: 18px;
    height: 18px;
  }
`;

const ContentTop = styled.div`
  position: absolute;
  top: 13px;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 32px;

  @media (max-width: 775px) {
    padding: 0 16px;
    top: 10px;
  }

  @media (min-width: 776px) and (max-width: 1439px) {
    padding: 0 24px;
  }
`;

const ContentBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px 50px;

  @media (max-width: 775px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px 24px;
    gap: 16px;
  }

  @media (min-width: 776px) and (max-width: 1439px) {
    padding: 0 32px 32px;
  }
`;

const WebText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 16px;
  max-width: 774px;

  @media (max-width: 775px) {
    gap: 8px;
    max-width: 100%;
  }

  @media (min-width: 776px) and (max-width: 1439px) {
    gap: 12px;
    max-width: 600px;
  }
`;

const WebTitle = styled.div`
  font-family: Poppins;
  font-weight: 800;
  font-style: ExtraBold;
  font-size: 52px;
  line-height: 64px;
  letter-spacing: 0;
  color: #fff;

  @media (max-width: 775px) {
    font-size: 24px;
    line-height: 32px;
  }

  @media (min-width: 776px) and (max-width: 1439px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const WebDescription = styled.div`
  font-family: Poppins;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
  color: #fff;
  height: 48px;
  line-height: 24px;
  max-width: 472px;

  @media (max-width: 775px) {
    font-size: 12px;
    line-height: 18px;
    height: auto;
    max-width: 100%;
    display: none;
  }

  @media (min-width: 776px) and (max-width: 1439px) {
    font-size: 14px;
    line-height: 22px;
    height: auto;
    max-width: 400px;
  }
`;

const StartBtn = styled.div`
  padding: 16px 24px;
  background: linear-gradient(268.49deg, #367cff 0%, #8d67ff 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: #fff;
  font-family: Poppins;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: capitalize;
  flex-shrink: 0;

  @media (max-width: 775px) {
    display: none;
  }

  @media (min-width: 776px) and (max-width: 1439px) {
    padding: 12px 20px;
    font-size: 18px;
    line-height: 24px;
    gap: 10px;
  }
`;

const StartBtnText = styled.div`
  font-weight: 600;
  font-style: SemiBold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0px;
  text-transform: capitalize;

  @media (min-width: 776px) and (max-width: 1439px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const StartBtnIcon = styled.img`
  width: 24px;
  height: 24px;

  @media (min-width: 776px) and (max-width: 1439px) {
    width: 20px;
    height: 20px;
  }
`;

export const Hero = () => {
  return (
    <Container>
      <Video src={backGroundVideo} autoPlay loop muted playsInline />
      <Cover />
      <ContentTop>
        <Logo src={logo} />
        <CreatingBtn>
          <CreatingBtnIcon src={magicWand} />
          <CreatingBtnText>Creating Now</CreatingBtnText>
        </CreatingBtn>
      </ContentTop>
      <ContentBottom>
        <WebText>
          <WebTitle>
            Your All-in-One Platform for Real Estate Content Creation
          </WebTitle>
          <WebDescription>
            Create stunning House Tours, Virtual Staging, Headshots, and Shorts
            with AI—fast, professional, effortless.
          </WebDescription>
        </WebText>
        <StartBtn>
          <StartBtnIcon src={magicWand} />
          <StartBtnText>Start Creating Now</StartBtnText>
        </StartBtn>
      </ContentBottom>
    </Container>
  );
};
