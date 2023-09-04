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
    margin-top: 130px;
  }
`;

export const FourcutContainerWrapper = styled.div`
  position: relative;
`;

export const FourcutContainer = styled.div`
  width: 201px;
  height: 513px;
  position: relative;
  box-sizing: border-box;
`;

export const FourcutFrame = styled.img`
  width: 201px;
  height: 513px;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  filter: blur(0px);
  shape-rendering: crispEdges;
  image-rendering: pixelated;
`;

export const PhotoWrapper = styled.div`
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
`;

interface WebGreenBtnWrapProps {
  done: boolean;
}
export const WebGreenBtnWrap = styled.div<WebGreenBtnWrapProps>`
  width: 100%;
  padding-right: ${(props) => (props.done ? "0px" : "50px")};
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;