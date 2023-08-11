import { FC, useState } from "react";
import { useNavigate } from "react-router";
import {
  AskPhotopostButtonContainer,
  AskPhotopostContent,
  AskPhotopostContainer,
  AskPhotopostWhiteBtn,
} from "./AskPhotopost.styles";
import MakeQuiz from "../MakeQuiz/MakeQuiz.components";
import GreenBtn from "../../../common/Buttons/GreenBtn.components";

interface AskPhotopostProps {
  handleModalClose: () => void;
  PostPhotoHandler: () => void;
  setModalContent: React.Dispatch<React.SetStateAction<string>>;
}

const AskPhotopost: FC<AskPhotopostProps> = ({
  handleModalClose,
  PostPhotoHandler,
  setModalContent,
}) => {
  const [IsMakingQuiz, setIsMakingQuiz] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setModalContent("");
    // submit 함수
  };

  return (
    <AskPhotopostContainer>
      {!IsMakingQuiz ? (
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
      ) : (
        <MakeQuiz handleModalClose={handleModalClose} />
      )}
    </AskPhotopostContainer>
  );
};

export default AskPhotopost;
