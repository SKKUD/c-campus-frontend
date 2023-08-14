import { UserState } from "./../recoil/recoil";
import axios from "axios";
import { useExtractID } from "./useExtractID";
import { useRecoilValue } from "recoil";

export const useProjectPostApi = () => {
  const [currentID] = useExtractID();
  //   const UserState = useRecoilValue()
  const formData = new FormData();
  // formData.append("category",)
  // formData.append("author",)
  // formData.append("background_color_code",)
  // formData.append("isQuiz",)
  // formData.append("quizQontent",)
  // formData.append("quizAnswer",)
  // formData.append("file",)

  const postProjectPost = () =>
    axios
      .post(
        process.env.REACT_APP_BACKEND_SERVER + `/users/${currentID}/messages`,
        formData
      )
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  return [postProjectPost];
};
