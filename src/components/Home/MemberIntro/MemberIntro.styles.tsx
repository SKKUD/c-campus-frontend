import styled from "@emotion/styled";

export const MemberIntroContainer = styled.div`
  width: 100vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 85px;
  font-family: GmarketSans;
  @media (max-width: 425px) {
    padding: 50px 20px;
  }
`;

export const MemberIntroHeader = styled.div`
  color: #000;
  font-size: 32px;
  font-weight: 400;
`;

export const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrackLabel = styled.div`
  color: #616161;
  font-size: 24px;
  font-family: GmarketSans;
  font-weight: 500;
`;

export const TrackIntro = styled.div`
  color: #000;
  font-size: 32px;
  font-weight: 300;
`;
