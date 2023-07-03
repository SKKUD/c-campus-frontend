import { MessageFrame ,MessageHolder } from "./Message.styles";

const Message = (nickName: string) => {

  return (
    <MessageFrame>
      <MessageHolder />
      <p>{nickName}</p>
    </MessageFrame>
  );  
};

export default Message;