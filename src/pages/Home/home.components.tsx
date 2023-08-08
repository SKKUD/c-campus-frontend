import LandingBtn from "../../components/Home/LandingBtn/LandingBtn.components";
import {
  HomeContainer,
  LandingScreen,
  CongCapsuleImg,
  DownIcon,
} from "./home.styles";
import CongCapsule from "../../assets/animations/congcampus_logo.gif";
import downicon from "../../assets/images/downicon.png";
import MemberIntro from "../../components/Home/MemberIntro/MemberIntro.components";
const Home = () => {
  return (
    <HomeContainer>
      <LandingScreen>
        <CongCapsuleImg src={CongCapsule} />
        <LandingBtn />
        <DownIcon src={downicon} alt="down icon" />
      </LandingScreen>
      <MemberIntro />
    </HomeContainer>
  );
};

export default Home;
