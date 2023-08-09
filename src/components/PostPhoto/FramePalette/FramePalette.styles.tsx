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
  @media (max-width: 320px) {
    right: 5px;
  }
  @media (min-width: 425px) {
    right: 10%;
  }
  @media (min-width: 768px) {
    right: 20%;
    width: 60px;
    height: 426px;
    > svg {
      width: 60px;
      height: 60px;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    top: 50px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 456px;
    height: 64px;
    > svg {
      width: 64px;
      height: 64px;
    }
  }
`;

export const FrameColor = styled.div``;
