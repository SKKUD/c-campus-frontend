export const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_BACKEND_SERVER}/oauth2/callback/kakao`;