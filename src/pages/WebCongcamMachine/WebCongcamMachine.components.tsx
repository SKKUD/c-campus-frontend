import {
  WebMainPageContainer,
  Ground,
  BoxAbove,
  InfoImgConatiner,
  InfoPaper,
  ContentConatiner,
} from "../../components/WebMainPage/WebMainPage.styles";
import MessageList from "../MessageBox/MessageBox.components";
import MessageFeed from "../MessageFeed/MessageFeed.components";
import infoDescImg from "../../assets/images/infoDescImg.png";
import CongMachine from "../../components/Main/CongMachine/CongMachine.components";

// import for recoil
import { IsLoginRecoil, UserAuth } from "../../recoil/recoil";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";

const WebCongcamMachine = () => {
  const [isLogin, SetIsLogin] = useRecoilState(IsLoginRecoil);
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);

  const [currentID, SetCurrentID] = useState<string>("");

  // extract url id
  const extractID = () => {
    // get current url
    const currentUrl: string = window.location.href;
    const searchString: string = "/message";
    
    // extract until first /
    var positionSliceMain: number = currentUrl.indexOf(searchString);
    
    var extractedID: string = currentUrl.slice(positionSliceMain+searchString.length+1);

    // set it to currentID
    SetCurrentID(extractedID);
  };

  useEffect(() => {
    extractID();
  }, [])

  return (
    <WebMainPageContainer>
      <Ground />
      <CongMachine />
      <BoxAbove>
        <InfoImgConatiner>
          <InfoPaper src={infoDescImg} />
        </InfoImgConatiner>
        <ContentConatiner>
          {
            (isLogin && (userAuth.userID === currentID)) ? (
              <MessageList />
            ) : (
              <MessageFeed />
            )
          }
        </ContentConatiner>
      </BoxAbove>
    </WebMainPageContainer>
  );
};

export default WebCongcamMachine;
