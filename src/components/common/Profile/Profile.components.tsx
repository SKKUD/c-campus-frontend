import {
  ProfileContainer,
  ProfileImage,
  ProfileName,
  ProfileWrapper,
  CoinCotainer,
  CoinOrBtnWrapper,
  WebShareUrlContainer,
} from "./Profile.styles";
import coinicon from "../../../assets/images/congCoin.png";
import profileimage from "../../../assets/images/default_profile.jpeg";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserState } from "../../../recoil/recoil";
import {
  useAuthCheckApi,
  useUserProfileGetApi,
} from "../../../hooks/LoginAxios";
import LightGreenBtn from "../Buttons/LightGreenBtn.components";
import { kakaoURL } from "../../../utils/login/KakaoLogin/KaKaoLoginURL";
import { useExtractID } from "../../../hooks/useExtractID";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import ShareUrl from "../../ShareUrl/ShareUrl.components";

interface IProfile {
  coin: number;
}
const Profile = ({ coin }: IProfile) => {
  const match1024 = useMediaQuery("(min-width:1024px)");
  const profiledata = useRecoilValue(UserState);
  const currentID = useExtractID();
  const [checkAuth] = useAuthCheckApi();
  const [profile] = useUserProfileGetApi();
  const [userProfile, SetUserProfile] = useRecoilState(UserState);

  useEffect(() => {
    SetUserProfile({
      userID: currentID,
      nickname: profile.nickname,
      profileImageUrl: profile.profileImageUrl,
    });
  }, [profile]);

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <ProfileImage
          src={
            profiledata.profileImageUrl
              ? profiledata.profileImageUrl
              : profileimage
          }
        />
        <ProfileName>
          {profiledata.nickname && profiledata.nickname}님
        </ProfileName>
      </ProfileWrapper>

      {/*  로그인한 유저의 계정일 때 처리 */}
      <CoinOrBtnWrapper>
        {String(checkAuth) === currentID ? (
          <CoinCotainer>
            <img src={coinicon} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <path
                d="M4 4L1 1M4 4L7 7M4 4L7 1M4 4L1 7"
                stroke="#164300"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="coinCount">{coin ? coin : 0}</div>
            <WebShareUrlContainer>
              <ShareUrl />
            </WebShareUrlContainer>
          </CoinCotainer>
        ) : (
          <LightGreenBtn
            content="나도 쪽지 받기"
            onClick={(e) => (window.location.href = kakaoURL)}
          />
        )}
      </CoinOrBtnWrapper>
    </ProfileContainer>
  );
};

export default Profile;
