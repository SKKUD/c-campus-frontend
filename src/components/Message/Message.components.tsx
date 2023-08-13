import { 
  MessageFrame,
  MessageHolder, 
  MessageImage,
  MessageContent,
} from "./Message.styles";

// import assets
import CloseIcon from "../../assets/images/congball.svg";
import OpenIcon from "../../assets/images/congball_open_color.svg";

import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { UserState } from "../../recoil/recoil";

interface IMessage {
  id: number;
  isOpen: boolean;
  nickName: string;
}

const Message = ({ id, isOpen, nickName }: IMessage) => {
  const userid = useRecoilValue(UserState);
  const navigate = useNavigate();

  const RedirectToID = () => {
    navigate(`/message/${userid}/${id}`);
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