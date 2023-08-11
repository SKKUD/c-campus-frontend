import styled from "@emotion/styled";

export const PaletteContainer = styled.div`
  width: 48px;
  height: 336px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 768px) {
    width: 60px;
    height: 426px;
    > svg {
      width: 60px;
      height: 60px;
    }
  }
  @media (min-width: 1024px) {
    position: absolute;
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
