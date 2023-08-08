import {
  MemberIntroContainer,
  MemberIntroHeader,
  TrackContainer,
  TrackIntro,
  TrackLabel,
} from "./MemberIntro.styles";

const MemberIntro = () => {
  return (
    <MemberIntroContainer>
      <MemberIntroHeader>Members</MemberIntroHeader>
      <TrackContainer>
        <TrackLabel>Front-end</TrackLabel>
        <TrackIntro>사용자의 편의를 우선합니다</TrackIntro>
      </TrackContainer>
    </MemberIntroContainer>
  );
};

export default MemberIntro;
