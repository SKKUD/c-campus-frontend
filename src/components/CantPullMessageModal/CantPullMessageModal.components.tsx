import { FC } from "react";
import ModalLayout from "../PostMessage/ModalLayout/ModalLayout.components";
import {
  CantPullMessageModalContainer,
  CantPullMessageModalText,
  CantPullMessageModalGreenText
} from "./CantPullMessageModal.styles";
import GreenBtn from "../common/Buttons/GreenBtn.components";

interface ModalProps {
  modalOpen: boolean;
  handleModalClose: () => void;
}
const CantPullMessageModal: FC<ModalProps> = ({ modalOpen, handleModalClose }) => {

  const handleClicked = () => {

    // 
    handleModalClose();
  };

  return (
    <ModalLayout handleModalClose={handleModalClose} modalOpen={modalOpen}>
      <CantPullMessageModalContainer>
        <CantPullMessageModalGreenText>
          쪽지가 부족합니다!
        </CantPullMessageModalGreenText>
        <CantPullMessageModalText>
          쪽지 5개를 모으기 위해 <br/> 공유해보세요
        </CantPullMessageModalText>
        <GreenBtn content="공유하기" onClick={handleClicked} />
      </CantPullMessageModalContainer>
    </ModalLayout>
  );
};

export default CantPullMessageModal;
