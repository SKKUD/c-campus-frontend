import { KakaoContainer, KakaoText } from "./KakaoAlert.styles";

const KakaoAlert = () => {
  return (
    <KakaoContainer>
      <KakaoText>
        콩캠퍼스는 크롬 사용을 권장합니다.
        <br />
        크롬으로 접속해주세요 {`:)`}
      </KakaoText>
    </KakaoContainer>
  );
};

export default KakaoAlert;
