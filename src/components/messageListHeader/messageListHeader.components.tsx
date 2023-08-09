import { MessageListHeaderContainer, MessageListNumber, MessageListButton } from "./messageListHeader.styles";

interface IMessageListHeader {
  number: string,
}
const MessageListHeader = ({number}: IMessageListHeader) => {
  return (
    <MessageListHeaderContainer>
      <MessageListNumber>{number}개의 추억</MessageListNumber>
      <MessageListButton>공개 쪽지 관리</MessageListButton>
    </MessageListHeaderContainer>
  )
};

export default MessageListHeader;