import { 
  PublicToggleContainer,
  ToggleContainer,
  ToggleDescriptionContainer,
  ToggleDescription,
} from "./PublicToggle.styles";
import { useState } from "react";
import axios from "axios";
import { useAuthCheckApi } from "../../hooks/LoginAxios";

interface IPublicToggle {
  axiosisPublic?: boolean,
}


export const PublicToggle = ({axiosisPublic} : IPublicToggle) => {
  const [isOn, setisOn] = useState(!axiosisPublic); // true가 비공개 false가 공개
  const [userAuth] = useAuthCheckApi();

  const extractMessageID = () => {
    // get current url
    const currentUrl: string = window.location.href;

    // find message/
    const position: number = currentUrl.search("message/");

    // extract messageID
    const returnID: string[] = currentUrl.slice(position + 8).split("/");

    return returnID;
  };

  const patchAxios = async (messageID: string) => {
    await axios.patch(
      process.env.REACT_APP_BACKEND_SERVER + `/users/${userAuth}/messages/${messageID}`,
      {

      },
      {
        withCredentials: true,
      }
    ).then((response) => {
      // console.log("response");
      // console.log(response);
    })
    .catch((error) => {
      // console.log("error occur")
      // console.log(error);
    })
  };

  const toggleHandler = async () => {
    // invert isOn
    setisOn(!isOn)

    // extract
    const messageID: string[] = extractMessageID();

    // patch it
    patchAxios(messageID[0]);
  };

  return (
    <PublicToggleContainer>
      <ToggleDescriptionContainer>
        { !isOn ?
          <ToggleDescription color="#808080">쪽지 공개</ToggleDescription> :
          <ToggleDescription color="#808080">쪽지 비공개</ToggleDescription>
        }
      </ToggleDescriptionContainer>

      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked-container" : null}`}/>
        <div className={`toggle-circle ${isOn ? "toggle--checked-circle" : null}`}/>
      </ToggleContainer>
      
    </PublicToggleContainer>
  );
};

export default PublicToggle;