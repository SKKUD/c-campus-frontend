import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { BtnWrapper, InstaBtn } from "./LandingBtn.styles";
import WhiteBtn from "../common/Buttons/WhiteBtn.components";
import instabtn from "../../assets/images/instabtn.png";
const LandingBtn = () => {
  const match1024 = useMediaQuery("(min-width:1024px)");
  const navigate = useNavigate();

  return (
    <BtnWrapper>
      <WhiteBtn
        content="콩캠퍼스 가기"
        onClick={(e) => (match1024 ? navigate("/message") : navigate("/main"))}
      />
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
