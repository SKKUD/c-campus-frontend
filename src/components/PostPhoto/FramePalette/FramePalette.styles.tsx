import styled from "@emotion/styled";

export const PaletteContainer = styled.div`
  position: absolute;
  right: 5%;
  top: 0px;
  width: 48px;
  height: 336px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 425px) {
    right: 10%;
  }
  @media (max-width: 320px) {
    right: 18px;
  }
  @media (max-width: 290px) {
    right: 5px;
  }
`;

export const FrameColor = styled.div``;
