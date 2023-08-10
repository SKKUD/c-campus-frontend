import {
  SendMessageContainer,
  SendMessageButtonContainer,
  SendMessageQuitButtonContainer,
  SendMessageQuitButton,
  SendMessageContent,
} from "./SendMessage.styles";

import GreenBtn from "../../../common/Buttons/GreenBtn.components";
import { FC } from "react";

interface SendMessageProps {
  handleModalClose: () => void;
}
const SendMessage: FC<SendMessageProps> = ({ handleModalClose }) => {
  return (
    <SendMessageContainer>
      <SendMessageContent>쪽지 발송이 완료되었습니다</SendMessageContent>
      <SendMessageButtonContainer>
        <GreenBtn content="확인" onClick={handleModalClose} />
      </SendMessageButtonContainer>
    </SendMessageContainer>
  );
};

export default SendMessage;
