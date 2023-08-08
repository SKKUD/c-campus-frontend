import LandingBtn from "../../components/Home/LandingBtn.components";
import {
  HomeContainer,
  LandingScreen,
  CongCapsuleImg,
  DownIcon,
} from "./home.styles";
import CongCapsule from "../../assets/animations/congcampus_logo.gif";
import downicon from "../../assets/images/downicon.png";
const Home = () => {
  return (
    <HomeContainer>
      <LandingScreen>
        <CongCapsuleImg src={CongCapsule} />
        <LandingBtn />
        <DownIcon src={downicon} alt="down icon" />
      </LandingScreen>
    </HomeContainer>
  );
};

export default Home;
