import styled from "@emotion/styled";

export const WebMainPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #f5f5f5;
  padding: 32px 40px;
`;

export const Ground = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: calc(21.6vh + 2px);
  background-color: #41523c;
  z-index: 1;
`;

export const BoxAbove = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
`;

export const InfoImgConatiner = styled.div`
  width: 400px;
  border-radius: 15px;
  z-index: 10;
`;

export const InfoPaper = styled.img`
  width: 100%;
`;

export const ContentConatiner = styled.div`
  width: 400px;
  height: 708px;
  max-height: 85vh;
  border-radius: 20px;
  border: 0.5px solid #164300;
  background: #f7f7f7;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
  > div {
    padding-top: 30px;
  }
`;
