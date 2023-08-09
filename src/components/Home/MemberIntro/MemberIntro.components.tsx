import {
  MemberIntroContainer,
  MemberIntroHeader,
  ProfileBox,
  ProfileCotainer,
  ProfileIcon,
  ProfileName,
  ProfileDetail,
  ProfilePhoto,
  TrackContainer,
  TrackIntro,
  TrackLabel,
} from "./MemberIntro.styles";
import ksh from "../../../assets/images/img_profile_ksh.jpeg";
import ajs from "../../../assets/images/img_profile_ajs.jpg";
import ohe from "../../../assets/images/img_profile_ohe.jpeg";
import kyj from "../../../assets/images/img_profile_kyj.jpg";
import rjy from "../../../assets/images/img_profile_rjy.jpg";
import kdk from "../../../assets/images/img_profile_kdk.jpeg";
import ksi from "../../../assets/images/img_profile_ksi.jpg";
import hes from "../../../assets/images/img_profile_hes.jpg";
import byj from "../../../assets/images/img_profile_byj.jpg";
import instaicon from "../../../assets/images/instaicon_black.png";
import notionicon from "../../../assets/images/notionicon.png";
import githubicon from "../../../assets/images/githubicon.png";

const MemberIntro = () => {
  return (
    <MemberIntroContainer>
      <MemberIntroHeader>Members</MemberIntroHeader>
      <TrackContainer>
        <TrackLabel className="Front">Front-end</TrackLabel>
        <TrackIntro>사용자의 편의를 우선합니다</TrackIntro>
        <ProfileCotainer>
          <ProfileBox to="https://bit.ly/3Bdae8f">
            <ProfilePhoto src={ksh} />
            <ProfileIcon>
              <img src={notionicon} alt="icon" />
            </ProfileIcon>
            <ProfileName>강서현</ProfileName>
          </ProfileBox>
          <ProfileBox to="https://github.com/ajs3801">
            <ProfilePhoto src={ajs} />
            <ProfileIcon>
              <img src={githubicon} alt="icon" />
            </ProfileIcon>
            <ProfileName>안준성</ProfileName>
          </ProfileBox>
          <ProfileBox to="http://bitly.ws/Rj98">
            <ProfilePhoto src={ohe} />
            <ProfileIcon>
              <img src={notionicon} alt="icon" />
            </ProfileIcon>
            <ProfileName>오하은</ProfileName>
          </ProfileBox>
        </ProfileCotainer>
      </TrackContainer>
      <TrackContainer>
        <TrackLabel className="Back">Back-end</TrackLabel>
        <TrackIntro>서비스의 안정성을 확보합니다</TrackIntro>
        <ProfileCotainer>
          <ProfileBox to="https://github.com/ks1ksi">
            <ProfilePhoto src={ksi} />
            <ProfileIcon>
              <img src={githubicon} alt="icon" />
            </ProfileIcon>
            <ProfileName>김승일</ProfileName>
          </ProfileBox>
          <ProfileBox to="https://whyj-yj.notion.site/Yoonjae-Baek-be25bba6f6144f64a222d1e5c849ace0?pvs=4">
            <ProfilePhoto src={byj} />
            <ProfileIcon>
              <img src={notionicon} alt="icon" />
            </ProfileIcon>
            <ProfileName>백윤재</ProfileName>
          </ProfileBox>
          <ProfileBox to="">
            <ProfilePhoto src={rjy} />
            <ProfileIcon>
              <img src={githubicon} alt="icon" />
            </ProfileIcon>
            <ProfileName>이주용</ProfileName>
          </ProfileBox>
        </ProfileCotainer>
      </TrackContainer>
      <TrackContainer className="Design">
        <TrackLabel>Design</TrackLabel>
        <TrackIntro>즐거운 경험을 선사합니다</TrackIntro>
        <ProfileCotainer>
          <ProfileBox to="https://www.instagram.com/kmusein">
            <ProfilePhoto src={kyj} />
            <ProfileIcon>
              <img src={instaicon} alt="icon" />
            </ProfileIcon>
            <ProfileName>강유진</ProfileName>
            <ProfileDetail>UX/UI디자인</ProfileDetail>
          </ProfileBox>
          <ProfileBox to="">
            <ProfilePhoto src={kdk} />
            <ProfileIcon>
              <img src={instaicon} alt="icon" />
            </ProfileIcon>
            <ProfileName>김도경</ProfileName>
            <ProfileDetail>3D디자인</ProfileDetail>
          </ProfileBox>
        </ProfileCotainer>
      </TrackContainer>
      <TrackContainer className="Marketing">
        <TrackLabel>Marketing</TrackLabel>
        <TrackIntro>사용자에게 다가갑니다</TrackIntro>
        <ProfileCotainer>
          <ProfileBox to="">
            <ProfilePhoto src={hes} />
            <ProfileIcon>
              <img src={instaicon} alt="icon" />
            </ProfileIcon>
            <ProfileName>하은서</ProfileName>
          </ProfileBox>
        </ProfileCotainer>
      </TrackContainer>
    </MemberIntroContainer>
  );
};

export default MemberIntro;
