import KakaoLoginButton from "../../../assets/images/kakao_login_medium.png";

const KakaoLogin = () => {  
  // const CLIENT_ID = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  // const REDIRECT_URI = "http://localhost:3000/loginCallback";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=309c9c0e13bfb97ff3dbefa48d043977&redirect_uri=http://c-campus-backend-env.eba-x8mpwa2i.ap-northeast-2.elasticbeanstalk.com/oauth2/callback/kakao`

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