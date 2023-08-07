import styled from "@emotion/styled";

export const PhotoBoxContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 92px 16px 10px;
`;

export const PhotoBoxLabel = styled.div`
  color: #303030;
  font-family: GmarketSansMedium;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.28px;
`;

export const PhotoFlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  height: calc(100% - 60px);
  overflow: scroll;
  > div {
    margin-right: 4%;
  }
  > div:nth-of-type(4n) {
    margin-right: 0;
  }
  @media (min-width: 1024px) {
    padding-bottom: 110px;
  }
`;

export const PhotoWrapper = styled.div`
  width: 22%;
`;

export const Photo = styled.img`
  width: 100%;
`;
