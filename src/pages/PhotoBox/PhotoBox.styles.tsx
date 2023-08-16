import styled from "@emotion/styled";

export const PhotoBoxContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 92px 16px 10px;
`;

export const PhotoBoxLabel = styled.div`
  color: #303030;
  font-family: GmarketSans;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.28px;
`;

export const PhotoFlexBox = styled.div`
  width: 100%;
  margin-top: 15px;
  height: calc(100% - 60px);
  overflow: scroll;
`;

export const PhotoScrollContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 150px;
  > div {
    margin-right: 4%;
  }
  > div:nth-of-type(4n) {
    margin-right: 0;
  }
`;

export const PhotoWrapper = styled.div`
  width: 22%;
`;

export const Photo = styled.img`
  width: 100%;
`;

export const PhotoBoxEmpty = styled.div`
  width: 90%;
  max-width: 375px;
  margin: auto;
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

  margin-top: 100px;
  padding-top: 30px;
  padding-bottom: 30px;
`;