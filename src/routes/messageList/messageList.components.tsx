import Message from "../../components/Message/Message.components";

import { MessageListContainer, MessageListHoder, MessageListDate, MessageListContent } from "./messageList.styles";

// Message type
interface IMessages {
  date: string,
  beans: Array<IBean>
}

// Bean type
interface IBean {
  id: string,
  nickName: string,
}

const MessageList = () => {
  const MessageData: IMessages[] = [
    {
      date: "5월 23일",
      beans: [
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "1",
          nickName: "스꾸디입니당"
        },
        {
          id: "2",
          nickName: "누구세요"
        },
        {
          id: "3",
          nickName: "누굴까"
        },
        {
          id: "4",
          nickName: "이닉네임은열글자임니"
        },
        {
          id: "5",
          nickName: "하하하ㅏ"
        },
        {
          id: "6",
          nickName: "아무노래나"
        },
        {
          id: "7",
          nickName: "닉넴없음"
        },
        {
          id: "8",
          nickName: "나야너야연결고리"
        },
        {
          id: "9",
          nickName: "물통에있는물"
        },
      ]
    },
    {
      date: "5월 20일",
      beans: [
        {
          id: "10",
          nickName: "장갑"
        },
        {
          id: "11",
          nickName: "사실근처보이는거"
        },
        {
          id: "12",
          nickName: "적는중"
        },
        {
          id: "13",
          nickName: "또다른닉네임"
        },
        {
          id: "14",
          nickName: "English"
        },
      ]
    },
    {
      date: "5월 19일",
      beans: [
        {
          id: "15",
          nickName: "닉네임입니당"
        },
        {
          id: "16",
          nickName: "닉네임입니당"
        },
        {
          id: "17",
          nickName: "닉네임입니당"
        },
        {
          id: "18",
          nickName: "닉네임입니당"
        },
        {
          id: "19",
          nickName: "닉네임입니당"
        },
      ]
    }
  ]

  return (
    <MessageListContainer>
      { MessageData && MessageData.map((messageData: IMessages) => {
          return (
            <MessageListHoder key={messageData.date}>
              <MessageListDate>{messageData.date}</MessageListDate>
              <MessageListContent>
                {
                  messageData.beans && messageData.beans.map((bean: IBean) => {
                    return (
                      <Message key={bean.id} id={bean.id} nickName={bean.nickName} />
                      // <div>{bean.nickName}</div>
                    )
                  })  
                }
              </MessageListContent>
            </MessageListHoder>
          )
        })
      }
    </MessageListContainer>
  );
};

export default MessageList;