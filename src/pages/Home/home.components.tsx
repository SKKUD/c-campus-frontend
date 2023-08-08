import LandingBtn from "../../components/Home/LandingBtn/LandingBtn.components";
import {
  HomeContainer,
  LandingScreen,
  CongCapsuleImg,
  DownIcon,
  LandingContent,
} from "./home.styles";
import CongCapsule from "../../assets/animations/congcampus_logo.gif";
import downicon from "../../assets/images/downicon.png";
import MemberIntro from "../../components/Home/MemberIntro/MemberIntro.components";
import mobilelandingtop from "../../assets/images/mobileLandingtop.png";
import mobilelandingbottom from "../../assets/images/mobileLandingbottom.png";
import mobilelandingFooter from "../../assets/images/mobileLandingFooter.png";
import pclandingtop from "../../assets/images/pcLandingtop.png";
import pclandingbottom from "../../assets/images/pcLandingbottom.png";
import pclandingFooter from "../../assets/images/pcLandingFooter.png";
import { useMediaQuery } from "@mui/material";
const Home = () => {
  const match500 = useMediaQuery("(max-width:500px)");
  return (
    <HomeContainer>
      <LandingScreen>
        <CongCapsuleImg src={CongCapsule} />
        <LandingBtn />
        {match500 && <DownIcon src={downicon} alt="down icon" />}
      </LandingScreen>
      {!match500 ? (
        <LandingContent src={pclandingtop} />
      ) : (
        <LandingContent src={mobilelandingtop} />
      )}
      <MemberIntro />
      {!match500 ? (
        <>
          <LandingContent src={pclandingbottom} />
          <LandingContent src={pclandingFooter} />
        </>
      ) : (
        <>
          <LandingContent src={mobilelandingbottom} />
          <LandingContent src={mobilelandingFooter} />
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
