import { atom } from "recoil";

export const IsLoginRecoil = atom({
  key: "IsLogin",
  default: false,
});

export const UserAuth = atom({
  key: "User",
  default: {
    userID: "1",
    nickName: "",
    profile_image: "",
  }
})

export const IsWritingMessage = atom({
  key: "IsWriting",
  default: false,
});

export const MessageState = atom({
  key: "Message",
  default: {
    name: "",
    content: "",
  },
});

export const PhotoState = atom({
  key: "Photo",
  default: {
    PhotoTaken: false,
    PhotoURL: "",
  },
});

export const QuizState = atom({
  key: "Quiz",
  default: {
    QuizGiven: false,
    QuizContent: "",
    QuizAnswer: "",
  },
});

