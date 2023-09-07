import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { BtnWrapper, InstaBtn } from "./LandingBtn.styles";
import WhiteBtn from "../../common/Buttons/WhiteBtn.components";
import instabtn from "../../../assets/images/instabtn.png";

// import for recoil
import { useAuthCheckApi } from "../../../hooks/LoginAxios";
import { kakaoURL } from "../../../utils/login/KakaoLogin/KaKaoLoginURL";

const LandingBtn = () => {
  const navigate = useNavigate();
  const [checkAuth] = useAuthCheckApi();

  return (
    <BtnWrapper>
      {checkAuth ? (
        <WhiteBtn
          content="콩캠퍼스 가기"
          onClick={(e) => navigate(`/${checkAuth}`)}
        />
      ) : (
        <WhiteBtn
          content="로그인하기"
          onClick={() => {
            window.location.href = kakaoURL;
          }}
        />
      )}
      <Link
        to="https://instagram.com/cong_skku?igshid=MzRlODBiNWFlZA=="
        style={{ textDecoration: "none" }}
      >
        <InstaBtn>
          <img src={instabtn} alt="instagram icon" />
          cong_skku
        </InstaBtn>
      </Link>
    </BtnWrapper>
  );
};

export default LandingBtn;
