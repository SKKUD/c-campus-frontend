import styled from "@emotion/styled";
import WhiteBtn from "../../components/common/Buttons/WhiteBtn.components";

export const PhotoBoothContainer = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  padding-top: 100px;
  overflow: scroll;
  min-height: 100vh;
`;

export const FourcutNPaletteWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    padding-top: 130px;
  }
`;

export const FourcutContainer = styled.div`
  width: 201px;
  height: 513px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  /* default */
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 320px) {
    margin: 0 20px;
  }
`;

export const FourcutFrame = styled.img`
  width: 201px;
  height: 513px;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  pointer-events: none;
`;

export const PhotoWrapper = styled.div`
  margin: 0 auto;
  width: 201px;
  height: 452px;
  padding-top: 4.26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FourcutPhoto = styled.img`
  width: 189px;
  height: 112px;
  flex-shrink: 0;
  background-color: #000;
  cursor: pointer;
`;

export const DateContainer = styled.div<{ brightFrame: string }>`
  position: absolute;
  right: 6px;
  bottom: 2px;
  color: ${(props) =>
    props.brightFrame === "bright"
      ? "rgba(116, 116, 116, 0.73)"
      : props.brightFrame === "medium"
      ? "#AAAAAA"
      : "rgba(255, 255, 255, 0.5)"};
  font-family: GmarketSans;
  font-size: 12px;
  font-weight: 300;
  z-index: 999;
`;

export const WebGreenBtnWrap = styled.div`
  width: 201px;
  max-width: 1440px;
  position: absolute;
  bottom: 10px;
  right: 16px;
  margin: 0 auto;
  @media (min-width: 1440px) {
    right: calc((100vw - 1280px) / 2);
  }
`;