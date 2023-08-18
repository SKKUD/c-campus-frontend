import { atom } from "recoil";


interface UserProfile {
  userID: string;
  nickname: string;
  profileImageUrl: string;
}
// 방문한 페이지의 유저 정보 (프로필 표시)
export const UserState = atom<UserProfile>({
  key: "User",
  default: {
    userID: "",
    nickname: "",
    profileImageUrl: "",
  },
});

// 현재 유저(로그인한 유저)의 userid
export const UserAuth = atom({
  key: "UserAuth",
  default: "",
});

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

export const PhotoFile = atom({
  key: "File",
  default: null as File | null,
});

export const QuizState = atom({
  key: "Quiz",
  default: {
    QuizGiven: false,
    QuizContent: "",
    QuizAnswer: "",
  },
});



