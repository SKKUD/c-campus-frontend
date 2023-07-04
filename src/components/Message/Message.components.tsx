import { MessageFrame ,MessageHolder, MessageContent } from "./Message.styles";

interface IMessage {
  id: string,
  nickName: string,
}

const Message = ({id, nickName}: IMessage) => {

  return (
    <MessageFrame id={id}>
      <MessageHolder />
      <MessageContent>{nickName}</MessageContent>
    </MessageFrame>
  );  
};

export default Message;