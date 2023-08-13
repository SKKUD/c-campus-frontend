import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { BtnWrapper, InstaBtn } from "./LandingBtn.styles";
import WhiteBtn from "../../common/Buttons/WhiteBtn.components";
import instabtn from "../../../assets/images/instabtn.png";

// import for recoil
import { IsLoginRecoil } from "../../../recoil/recoil";
import { useRecoilState } from "recoil";

const LandingBtn = () => {
  const match1024 = useMediaQuery("(min-width:1024px)");
  const navigate = useNavigate();
  const [isLogin, SetIsLogin] = useRecoilState(IsLoginRecoil);

  const onClickKakaoLogin = () => {
    // isLogin true하고
    SetIsLogin(true);

    // 카카오로그인 처리하러 리다이렉트 시키기
    // 
  }

  return (
    <BtnWrapper>
      {
        isLogin ? (
          <WhiteBtn
            content="콩캠퍼스 가기"
            onClick={(e) => (match1024 ? navigate("/message/1") : navigate("/main/1"))}
          />
        ) : (
          <WhiteBtn
            content="로그인하기"
            onClick={onClickKakaoLogin}
          />
        )
      }
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
