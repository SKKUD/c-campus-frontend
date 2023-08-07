import { useState, useEffect} from "react";
import axios, {RawAxiosResponseHeaders, AxiosResponseHeaders, InternalAxiosRequestConfig}from "axios";

interface AxiosResponse<T = any, D = any> {
  data: T
  status: number
  statusText: string
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders
  config: InternalAxiosRequestConfig<D>
  request?: any
}

const KakaoLoginCallBack = () => {
  const [authCode, setAuthCode] = useState("");
  const [token, setToken] = useState("");

  const getAuthCode = () => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');

    return code;
  }

  const getToken = async (code: string) => {
    const grant_type = 'authorization_code'
    const client_id = "XXXXXXXXXXXXXXXXXX"
    const REDIRECT_URI = "http://localhost:3000/loginCallback";
    console.log(code);

    const res = await axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    ).then(async (response: AxiosResponse) => {
      const kakaoUser: any = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${response.data.access_token}`,
        },
      }).catch((error) => {
        if (axios.isAxiosError(error)) {
          console.log(error);
        }
      });
      console.log(kakaoUser.data.properties);
      // setNickName(kakaoUser.data.properties.nickname);
      // setProfile(kakaoUser.data.properties.profile_image);
    }).catch((error) => {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    });
  }

  useEffect(() => {
    const code = getAuthCode();
    if (code) {      
      getToken(code);
    }

  }, [new URL(document.location.toString()).searchParams]);

  return (
    <div>
      
    </div>
  );
};

export default KakaoLoginCallBack;