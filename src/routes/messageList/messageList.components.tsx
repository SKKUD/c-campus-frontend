import Message from "../../components/Message/Message.components"

interface IMessages {
  date: string,
  beans: Array<Object>
}

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
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
      ]
    },
    {
      date: "5월 20일",
      beans: [
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
      ]
    },
    {
      date: "5월 19일",
      beans: [
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
        {
          id: "0",
          nickName: "닉네임입니당"
        },
      ]
    }
  ]

  return (
    <div>
      {
        MessageData.map((Messages: IMessages) => {
          <div>{Messages.date}</div>
          <div>
            {
              Messages.beans.map((bean: IBean) => {
                <Message nickName={bean.nickName}/>
              })
            }
          </div>
        })
      } 
    </div>
  );
};

export default MessageList;