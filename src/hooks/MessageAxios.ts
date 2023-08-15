import { MessageState, PhotoState, QuizState } from "./../recoil/recoil";
import axios from "axios";
import { useExtractID } from "./useExtractID";
import { useRecoilValue } from "recoil";

export const useMessageSubmitApi = (
  messageCategory: string,
  backgroundHex: string
) => {
  const currentID = useExtractID();
  const Message = useRecoilValue(MessageState);
  const Photo = useRecoilValue(PhotoState);
  const Quiz = useRecoilValue(QuizState);

  const submitMessage = () => {
    const formData = new FormData();
    formData.append("file", Photo.PhotoURL);
    const jsonObject = {
      category: messageCategory,
      content: Message.content,
      author: Message.name,
      background_color_code: backgroundHex,
      isQuiz: Quiz.QuizGiven,
      quizQontent: Quiz.QuizContent,
      quizAnswer: Quiz.QuizAnswer,
    };
    axios
      .post(
        process.env.REACT_APP_BACKEND_SERVER + `/users/${currentID}/messages`,
        { file: formData, request: JSON.stringify(jsonObject) }
      )
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [submitMessage];
};
