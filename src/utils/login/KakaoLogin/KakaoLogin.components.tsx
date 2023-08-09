import KakaoLoginButton from "../../../assets/images/kakao_login_medium.png";
import axios from "axios";

const KakaoLogin = () => {  
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/kakaoLogin`

  return(
    <img
      alt="카카오 로그인"
      src={KakaoLoginButton}
      style={{margin: '24px 24px 16px 24px'}}
      onClick={() => window.location.href = kakaoURL}
    />
  )
}

export default KakaoLogin;