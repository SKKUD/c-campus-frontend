import { 
  PublicToggleContainer,
  ToggleContainer,
  ToggleDescriptionContainer,
  ToggleDescription,
} from "./PublicToggle.styles";

import { useState } from "react";

// recoil
import { UserAuth } from "../../recoil/recoil";
import { useRecoilState } from "recoil";

// axios call
import { PatchPublic } from "../../hooks/MessagePublic";
import axios from "axios";

interface IPublicToggle {
  axiosisPublic?: boolean,
}

export const PublicToggle = ({axiosisPublic} : IPublicToggle) => {
  const [isOn, setisOn] = useState(!axiosisPublic); // true가 비공개 false가 공개

  const extractMessageID = () => {
    // get current url
    const currentUrl: string = window.location.href;

    // find message/
    const position: number = currentUrl.search("message/");

    // extract messageID
    const returnID: string[] = currentUrl.slice(position + 8).split("/");

    return returnID;
  };

  const toggleHandler = () => {
    // invert isOn
    setisOn(!isOn)

    // extract messageID
    const messageID: string[] = extractMessageID();

    // patch
    const updated = { isPublic: isOn };
    const res = axios.patch(`${process.env.REACT_APP_BACKEND_SERVER}/users/${messageID[0]}/messages/${messageID[1]}`, 
                            { withCredentials: true })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error)
              });
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