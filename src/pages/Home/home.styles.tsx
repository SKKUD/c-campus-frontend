import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  width: 100vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const LandingScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d6eaba;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LandingContent = styled.img`
  width: 100vw;
`;

export const CongCapsuleImg = styled.img`
  width: 375px;
  height: 375px;
  @media (max-width: 375px) {
    width: 280px;
    height: 280px;
  }
  @media (max-width: 280px) {
    width: 240px;
    height: 240px;
  }
`;

export const DownIcon = styled.img`
  width: 33px;
  height: 29px;
  position: absolute;
  bottom: 30px;
`;