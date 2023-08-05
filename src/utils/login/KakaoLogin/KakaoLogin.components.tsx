const KakaoLogin = () => {  
  const CLIENT_ID = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  const REDIRECT_URI = "http://localhost:3000/loginCallback";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

  return(
    <img
      alt="카카오 로그인"
      src="image/kakao_login_medium.png"
      style={{margin: '24px 24px 16px 24px'}}
      onClick={() => window.location.href = kakaoURL}
    />
  )
}

export default KakaoLogin;