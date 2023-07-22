import styled from "@emotion/styled";

export const PhotoBoxContainer = styled.div`
  width: 100vw;
  background-color: #f5f5f5;
  padding: 92px 16px;
`;

export const PhotoBoxLabel = styled.div`
  color: #303030;
  font-family: Cafe24Ssurround;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const PhotoFlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
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
