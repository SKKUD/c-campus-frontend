import { 
  MessageFrame,
  MessageHolder, 
  MessageImage,
  MessageContent,
} from "./Message.styles";

// import assets
import CloseIcon from "../../assets/images/congball.svg";
import OpenIcon from "../../assets/images/congball_open_color.svg";

interface IMessage {
  id: string,
  isOpen: boolean,
  nickName: string,
}

const Message = ({id, isOpen, nickName}: IMessage) => {
  return (
    <MessageFrame id={id}>
      <MessageHolder>
        {isOpen ? (<MessageImage src={OpenIcon}></MessageImage>) : (<MessageImage src={CloseIcon}></MessageImage>)}
        
      </MessageHolder>

      <MessageContent>{nickName}</MessageContent>
    </MessageFrame>
  );  
};

export default Message;