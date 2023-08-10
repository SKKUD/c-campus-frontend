import { atom } from "recoil";

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
    PhotoURl: "",
  },
});

export const QuizState = atom({
  key: "Quiz",
  default: {
    givenQuiz: false,
    QuizContent: "",
    QuizAnswer: "",
  },
});

