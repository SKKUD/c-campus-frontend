import { 
  HomeContainer,
} from "./home.styles";

import KakaoLogin from "../../utils/login/KakaoLogin/KakaoLogin.components";

const Home = () => {
  return (
    <HomeContainer>
      <KakaoLogin />
    </HomeContainer>
  );
}

export default Home;