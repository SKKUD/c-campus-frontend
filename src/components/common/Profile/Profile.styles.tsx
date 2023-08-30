import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 425px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 800;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

export const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 25%;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

export const ProfileName = styled.div`
  color: #303030;
  font-family: Cafe24Ssurround;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.36px;
`;

export const CoinOrBtnWrapper = styled.div`
  margin-right: 16px;
`;

export const CoinCotainer = styled.div`
  width: 80px;
  height: 32px;
  padding: 4px 6px;
  background-color: rgba(141, 198, 63, 0.2);
  > img {
    width: 24px;
    height: 24px;
  }
  > div {
    color: #164300;
    font-family: GmarketSans;
    font-size: 14px;
    font-weight: 500;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WebShareUrlContainer = styled.div`
  position: absolute;
  bottom: -50px;
  right: 15px;
`