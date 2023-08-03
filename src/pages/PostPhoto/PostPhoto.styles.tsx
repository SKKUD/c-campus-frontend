import styled from "@emotion/styled";

export const PhotoBoothContainer = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
`;

export const FourcutNPaletteWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const FourcutContainer = styled.div`
  margin: 0 auto;
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
  height: 450px;
  padding-top: 4.26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FourcutPhoto = styled.img`
  width: 189px;
  height: 110px;
  flex-shrink: 0;
  background-color: #000;
  cursor: pointer;
`;
