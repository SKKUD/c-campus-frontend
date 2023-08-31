import styled from "styled-components";

export const BackgroundOfMainContainer = styled.div`
  width: 100vw;
  overflow: scroll;
  background-color: #41523c;
`;

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #f5f5f5;
`;

export const MainBackground = styled.div`
  width: 100vw;
  height: calc(21.6vh + 2px);
  background-color: #41523c;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const MainEmpty = styled.div`
  width: 90%;
  max-width: 375px;
  margin: 100px auto;
  padding: 30px 0;
  background-color: #ffffff;
  border-radius: 10px;
  color: var(--font-black, #303030);
  text-align: center;
  font-family: GmarketSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 1000;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const ShareUrlContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 10;
`;