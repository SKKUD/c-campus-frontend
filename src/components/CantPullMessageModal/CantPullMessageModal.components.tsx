import { FC, useEffect, useState } from "react";
import ModalLayout from "../PostMessage/ModalLayout/ModalLayout.components";
import {
  CantPullMessageModalContainer,
  CantPullMessageModalText,
  CantPullMessageModalGreenText,
} from "./CantPullMessageModal.styles";
import GreenBtn from "../common/Buttons/GreenBtn.components";
import CopyToClipboard from "react-copy-to-clipboard";

interface ModalProps {
  modalOpen: boolean;
  handleModalClose: () => void;
}
const CantPullMessageModal: FC<ModalProps> = ({
  modalOpen,
  handleModalClose,
}) => {
  const [currentUrl, SetCurrentUrl] = useState<string>(window.location.href);
  const [isLoad, SetIsLoad] = useState<boolean>(false);

  useEffect(() => {
    SetCurrentUrl(window.location.href);
  }, [window.location.href]);

  const handleClicked = () => {
    if (isLoad === false) {
      SetIsLoad(true);
      setTimeout(() => {
        SetIsLoad(false);
        handleModalClose();
      }, 3000);
    }
  };

  return (
    <ModalLayout handleModalClose={handleModalClose} modalOpen={modalOpen}>
      <CantPullMessageModalContainer>
        {isLoad ? (
          <CantPullMessageModalText>
            클립보드에 링크가
            <br /> 복사되었어요!
          </CantPullMessageModalText>
        ) : (
          <>
            <CantPullMessageModalGreenText>
              쪽지가 부족합니다!
            </CantPullMessageModalGreenText>
            <CantPullMessageModalText>
              쪽지 5개를 모으기 위해 <br /> 공유해보세요
            </CantPullMessageModalText>
          </>
        )}

        <CopyToClipboard text={currentUrl} onCopy={() => handleClicked()}>
          {isLoad ? (
            <GreenBtn content="닫기" onClick={handleModalClose} />
          ) : (
            <GreenBtn content="공유하기" />
          )}
        </CopyToClipboard>
      </CantPullMessageModalContainer>
    </ModalLayout>
  );
};

export default CantPullMessageModal;
