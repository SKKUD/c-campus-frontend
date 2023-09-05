import { SafariContainer, SafariText } from "./SafariAlert.styles";

const SafariAlert = () => {
  return (
    <SafariContainer>
      <SafariText>
        콩캠퍼스는 크롬 사용을 권장합니다.
        <br />
        크롬으로 접속해주세요 {`:)`}
      </SafariText>
    </SafariContainer>
  );
};

export default SafariAlert;
