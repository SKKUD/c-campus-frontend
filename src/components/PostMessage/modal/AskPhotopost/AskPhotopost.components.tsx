import { FC, useState } from "react";
import {
  AskPhotopostButtonContainer,
  AskPhotopostContent,
  AskPhotopostContainer,
  AskPhotopostWhiteBtn,
  AskPhotoKakaoButtonContainer,
} from "./AskPhotopost.styles";
import MakeQuiz from "../MakeQuiz/MakeQuiz.components";
import GreenBtn from "../../../common/Buttons/GreenBtn.components";

interface AskPhotopostProps {
  handleModalClose: () => void;
  PostPhotoHandler: () => void;
  setModalContent: React.Dispatch<React.SetStateAction<string>>;
  submitHandler: () => void;
}

const AskPhotopost: FC<AskPhotopostProps> = ({
  handleModalClose,
  PostPhotoHandler,
  setModalContent,
  submitHandler,
}) => {
  const [IsMakingQuiz] = useState(false);
  const [isKakao, SetIsKakao] = useState<boolean>((navigator.userAgent.indexOf("KAKAOTALK") > -1) ? true : false);

  const handleSubmit = () => {
    setModalContent("");
    // submit 함수
    submitHandler();
  };

  return (
    <AskPhotopostContainer>
      {!IsMakingQuiz ? (
        <>
          {
            isKakao ? ( 
              <>
                <AskPhotopostContent>
                  쪽지를 전달할게요
                </AskPhotopostContent>
                <AskPhotoKakaoButtonContainer>
                  <GreenBtn onClick={handleSubmit} content="쪽지 보내기" />
                </AskPhotoKakaoButtonContainer>
              </>
            ) : (
              <>
                <AskPhotopostContent>
                  콩캠네컷을 <br /> 찍으러 갈까요?
                </AskPhotopostContent>
                <AskPhotopostButtonContainer>
                  <AskPhotopostWhiteBtn onClick={handleSubmit}>
                    아니요
                  </AskPhotopostWhiteBtn>
                  <GreenBtn
                    content="콩캠네컷 찍기"
                    onClick={() => PostPhotoHandler()}
                  />
                </AskPhotopostButtonContainer>
              </>
            )
          }
        </>
      ) : (
        <MakeQuiz handleModalClose={handleModalClose} />
      )}
    </AskPhotopostContainer>
  );
};

export default AskPhotopost;
