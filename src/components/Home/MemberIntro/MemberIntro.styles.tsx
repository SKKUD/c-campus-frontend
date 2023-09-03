import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MemberIntroContainer = styled.div`
  width: 100vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 85px;
  font-family: GmarketSans;
  text-align: center;
  @media (max-width: 425px) {
    padding: 50px 20px;
  }
`;

export const MemberIntroHeader = styled.div`
  color: #000;
  font-size: 32px;
  font-weight: 400;
  @media (max-width: 425px) {
    font-size: 20px;
  }
  @media (max-width: 370px) {
    font-size: 16px;
  }
`;

export const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrackLabel = styled.div`
  color: #616161;
  font-size: 24px;
  font-weight: 500;
  margin-top: 60px;
  margin-bottom: 5px;
  @media (max-width: 425px) {
    font-size: 14px;
    margin-top: 32px;
  }
`;

export const TrackIntro = styled.div`
  color: #000;
  font-size: 32px;
  font-weight: 300;
  @media (max-width: 425px) {
    font-size: 20px;
  }
  @media (max-width: 370px) {
    font-size: 16px;
  }
`;

export const ProfileCotainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  width: auto;
  margin-top: 64px;
  margin-bottom: 100px;
  @media (max-width: 425px) {
    gap: 20px;
    margin-top: 32px;
    margin-bottom: 88px;
  }
  @media (max-width: 370px) {
    gap: 10px;
    margin-bottom: 50px;
  }
`;

export const ProfileBox = styled(Link)`
  width: 188px;
  position: relative;
  text-decoration: none;
  color: inherit;
  @media (max-width: 425px) {
    width: 94px;
  }
  @media (max-width: 370px) {
    width: 74px;
  }
`;

export const ProfilePhoto = styled.img`
  width: 188px;
  height: 188px;
  border-radius: 100px;
  object-fit: cover;

  @media (max-width: 425px) {
    width: 94px;
    height: 94px;
  }
  @media (max-width: 370px) {
    width: 74px;
    height: 74px;
  }
`;

export const ProfileIcon = styled.div`
  width: 61px;
  height: 61px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 127px;
  > img {
    width: 31px;
    height: 31px;
  }
  @media (max-width: 425px) {
    width: 30px;
    height: 30px;
    top: 64px;
    > img {
      width: 15px;
      height: 15px;
    }
  }
  @media (max-width: 370px) {
    width: 30px;
    height: 30px;
    top: 49px;
    > img {
      width: 15px;
      height: 15px;
    }
  }
`;
export const ProfileName = styled.div`
  font-size: 32px;
  font-weight: 300;
  @media (max-width: 425px) {
    font-size: 20px;
  }
  @media (max-width: 370px) {
    font-size: 16px;
  }
`;

export const ProfileDetail = styled.div`
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 425px) {
    font-size: 12px;
  }
  @media (max-width: 370px) {
    font-size: 11px;
  }
`;