import { 
  MessageFrame,
  MessageHolder, 
  MessageImage,
  MessageContent,
} from "./Message.styles";

// import assets
import CloseIcon from "../../assets/images/congball.png";
import OpenIcon from "../../assets/images/congball_open_color.png";

import { useNavigate } from "react-router";
import { useExtractID } from "../../hooks/useExtractID";

interface IMessage {
  id: number;
  isOpen: boolean;
  nickName: string;
}

const Message = ({ id, isOpen, nickName }: IMessage) => {
  const userid = useExtractID();
  const navigate = useNavigate();

  const RedirectToID = () => {
    navigate(`/message/${id}/${userid}`);
  };

  return (
    <MessageFrame>
      <MessageHolder onClick={RedirectToID}>
        {isOpen ? (
          <MessageImage src={OpenIcon}></MessageImage>
        ) : (
          <MessageImage src={CloseIcon}></MessageImage>
        )}
      </MessageHolder>

      <MessageContent>{nickName}</MessageContent>
    </MessageFrame>
  );
};

export default Message;