import { useEffect, useState } from "react";
import Message from "../../components/Message/Message.components";
import LightGreenBtn from "../../components/common/Buttons/LightGreenBtn.components";

import { useNavigate } from "react-router";

import {
  MessageListHeader,
  MessageListHeaderMessageCount,
  MessageListContainer,
  MessageListHoder,
  MessageListDate,
  MessageListContent,
  MessageListDataContainer,
} from "./MessageBox.styles"

// Message type
interface IMessages {
  date: string;
  beans: Array<IBean>;
}

// Bean type
interface IBean {
  id: string;
  nickName: string;
  isOpen: boolean;
}

const MessageList = () => {
  const navigate = useNavigate();
  const [ messageCount, SetMessageCount ] = useState<number>(0);

  const MessageData: IMessages[] = [
    {
      date: "5월 23일",
      beans: [
        {
          id: "0",
          nickName: "닉네임입니당",
          isOpen: true,
        },
        {
          id: "1",
          nickName: "스꾸디입니당",
          isOpen: true,
        },
        {
          id: "2",
          nickName: "누구세요",
          isOpen: false,
        },
        {
          id: "3",
          nickName: "누굴까",
          isOpen: true,
        },
        {
          id: "4",
          nickName: "이닉네임은열글자임니",
          isOpen: false,
        },
        {
          id: "5",
          nickName: "하하하ㅏ",
          isOpen: true,
        },
        {
          id: "6",
          nickName: "아무노래나",
          isOpen: false,
        },
        {
          id: "7",
          nickName: "닉넴없음",
          isOpen: false,
        },
        {
          id: "8",
          nickName: "나야너야연결고리",
          isOpen: true,
        },
        {
          id: "9",
          nickName: "물통에있는물",
          isOpen: true,
        },
      ],
    },
    {
      date: "5월 20일",
      beans: [
        {
          id: "10",
          nickName: "장갑",
          isOpen: true,
        },
        {
          id: "11",
          nickName: "사실근처보이는거",
          isOpen: true,
        },
        {
          id: "12",
          nickName: "적는중",
          isOpen: false,
        },
        {
          id: "13",
          nickName: "또다른닉네임",
          isOpen: false,
        },
        {
          id: "14",
          nickName: "English",
          isOpen: false,
        },
      ],
    },
    {
      date: "5월 19일",
      beans: [
        {
          id: "15",
          nickName: "닉네임입니당",
          isOpen: true,
        },
        {
          id: "16",
          nickName: "닉네임입니당",
          isOpen: true,
        },
        {
          id: "17",
          nickName: "닉네임입니당",
          isOpen: false,
        },
        {
          id: "18",
          nickName: "닉네임입니당",
          isOpen: true,
        },
        {
          id: "19",
          nickName: "닉네임입니당",
          isOpen: false,
        },
      ],
    },
    {
      date: "5월 19일",
      beans: [
        {
          id: "20",
          nickName: "닉네임입니당",
          isOpen: true,
        },
        {
          id: "21",
          nickName: "닉네임입니당",
          isOpen: true,
        },
        {
          id: "22",
          nickName: "닉네임입니당",
          isOpen: false,
        },
        {
          id: "23",
          nickName: "닉네임입니당",
          isOpen: true,
        },
        {
          id: "24",
          nickName: "닉네임입니당",
          isOpen: false,
        },
      ],
    },
    {
      date: "5월 19일",
      beans: [
        {
          id: "25",
          nickName: "닉네임입니당",
          isOpen: true,
        },
        {
          id: "26",
          nickName: "닉네임입니당",
          isOpen: true,
        },
        {
          id: "27",
          nickName: "닉네임입니당",
          isOpen: false,
        },
        {
          id: "28",
          nickName: "닉네임입니당",
          isOpen: true,
        },
        {
          id: "29",
          nickName: "닉네임입니당",
          isOpen: false,
        },
      ],
    },
  ];

  useEffect(() => {
    SetMessageCount(20);
  }, []);

  // navigate to message feed
  const RedirectToFeedUrl = () => {
    navigate(`/message/feed`);
  }

  const RedirectToIDUrl = (id: string) => {
    console.log(id);
    navigate(`/message/${id}`);
  }

  return (
    <MessageListContainer>
      <MessageListHeader>
        <MessageListHeaderMessageCount>{messageCount}개의 추억</MessageListHeaderMessageCount>
        <LightGreenBtn content="내 피드 가기" onClick={RedirectToFeedUrl}/>
      </MessageListHeader>
      {MessageData &&
        MessageData.map((messageData: IMessages) => {
          // SetMessageCount(messageCount+1);
          return (
            <MessageListHoder key={messageData.date}>
              <MessageListDate>{messageData.date}</MessageListDate>
              <MessageListContent>
                {messageData.beans &&
                  messageData.beans.map((bean: IBean) => {
                    return (
                      <Message
                        key={bean.id}
                        id={bean.id}
                        isOpen={bean.isOpen}
                        nickName={bean.nickName}
                        onClick={() => RedirectToIDUrl(bean.id)}
                      />
                    );
                  })}
              </MessageListContent>
            </MessageListHoder>
          );
        })}
    </MessageListContainer>
  );
};

export default MessageList;
