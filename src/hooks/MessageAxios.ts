import { QuizState, PhotoFile } from "./../recoil/recoil";
import axios from "axios";
import { useExtractID } from "./useExtractID";
import { useRecoilValue } from "recoil";

export const useMessageSubmitApi = (
  messageCategory: string,
  backgroundHex: string,
  Message: { content: string; name: string }
) => {
  const currentID = useExtractID();

  const Photo = useRecoilValue(PhotoFile);
  const Quiz = useRecoilValue(QuizState);

  const submitMessage = () => {
    const formData = new FormData();
    const jsonObject = Quiz.QuizGiven
      ? {
          category: messageCategory,
          content: Message.content,
          author: Message.name,
          background_color_code: backgroundHex,
          is_quiz: Quiz.QuizGiven,
          quiz_content: Quiz.QuizContent,
          quiz_answer: Quiz.QuizAnswer,
        }
      : {
          category: messageCategory,
          content: Message.content,
          author: Message.name,
          background_color_code: backgroundHex,
          is_quiz: Quiz.QuizGiven,
        };

    Photo && formData.append("file", Photo);
    formData.append(
      "request",
      new Blob([JSON.stringify(jsonObject)], { type: "application/json" })
    );

    axios
      .post(
        process.env.REACT_APP_BACKEND_SERVER + `/users/${currentID}/messages`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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
