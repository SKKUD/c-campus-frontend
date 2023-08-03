import { 
  SendMessageContainer,
  SendMessageButtonContainer,
  SendMessageQuitButtonContainer,
  SendMessageQuitButton,
  SendMessageContent,
} from "./SendMessage.styles";

import GreenBtn from "../../../../components/common/Buttons/GreenBtn.components";

const SendMessage = () => {
  return (
    <SendMessageContainer>
      <SendMessageQuitButtonContainer><SendMessageQuitButton /></SendMessageQuitButtonContainer>
      <SendMessageContent>쪽지 발송이 완료되었습니다</SendMessageContent>
      <SendMessageButtonContainer>
        <GreenBtn content="확인"/>
      </SendMessageButtonContainer>
    </SendMessageContainer>
  );
};

export default SendMessage;