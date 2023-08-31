import styled from "@emotion/styled";

export const PaletteContainer = styled.div`
  width: 48px;
  height: 336px;
  position: absolute;
  left: calc(50% + 110px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    left: calc(50% + 150px);
    width: 60px;
    height: 426px;
  }
  @media (min-width: 1024px) {
    left: 0px;
    flex-direction: row;
    top: -100px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 456px;
    height: 64px;
  }
`;

export const RelativeBtnCotainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 1024px) {
    width: 64px;
    height: 64px;
  }
`;

export const FrameColorCheck = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: calc(50%);
  top: calc(50%);
  transform: translate(-50%, -50%);
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    width: 18px;
    height: 18px;
  }
  @media (min-width: 768px) {
    width: 31px;
    height: 31px;
  }
`;
