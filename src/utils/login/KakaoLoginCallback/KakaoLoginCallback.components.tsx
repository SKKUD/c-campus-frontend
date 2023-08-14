import { useState, useEffect} from "react";
import axios, {RawAxiosResponseHeaders, AxiosResponseHeaders, InternalAxiosRequestConfig}from "axios";
import { useNavigate } from "react-router";

interface AxiosResponse<T = any, D = any> {
  data: T
  status: number
  statusText: string
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders
  config: InternalAxiosRequestConfig<D>
  request?: any
}

const KakaoLoginCallBack = () => {
  const navigate = useNavigate();
  const [authCode, setAuthCode] = useState("");
  const [token, setToken] = useState("");

  const getAuthCode = () => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');

    return code;
  }

  const getToken = async (code: string) => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/oauth2/callback/kakao?code=${code}`,
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
      console.log(code);
      getToken(code);
    }
    navigate(`/main`);
  }, [new URL(document.location.toString()).searchParams]);

  return (
    <div>
      로그인 중...
    </div>
  );
};

export default KakaoLoginCallBack;