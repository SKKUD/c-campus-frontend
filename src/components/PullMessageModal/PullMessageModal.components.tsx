import { FC } from "react";
import ModalLayout from "../PostMessage/ModalLayout/ModalLayout.components";
import {
  CongballImg,
  PullMessageModalContainer,
  PullMessageModalText,
} from "./PullMessageModal.styles";
import congball from "../../assets/animations/congball_open.gif";
import GreenBtn from "../common/Buttons/GreenBtn.components";
import { useMediaQuery } from "@mui/material";
import { useExtractID } from "../../hooks/useExtractID";
import { useNavigate } from "react-router";

interface ModalProps {
  modalOpen: boolean;
  handleModalClose: () => void;
}
const PullMessageModal: FC<ModalProps> = ({ modalOpen, handleModalClose }) => {
  const match1024 = useMediaQuery("(min-width:1024px)");
  const currentID = useExtractID();
  const navigate = useNavigate();
  const handleClose = () => {
    handleModalClose();
    !match1024 && navigate(`/message/${currentID}`);
    window.location.reload();
  };
  return (
    <ModalLayout handleModalClose={handleModalClose} modalOpen={modalOpen}>
      <CongballImg src={congball} />
      {match1024 ? (
        <PullMessageModalContainer>
          <PullMessageModalText>
            5개의 쪽지가 뽑혔어요! 뽑힌 쪽지를 확인해보세요
          </PullMessageModalText>
          <GreenBtn content="닫기" onClick={handleClose} />
        </PullMessageModalContainer>
      ) : (
        <PullMessageModalContainer>
          <PullMessageModalText>
            5개의 쪽지가 뽑혔어요! 쪽지보관함에서 열어보세요
          </PullMessageModalText>
          <GreenBtn content="쪽지 보관함 가기" onClick={handleClose} />
        </PullMessageModalContainer>
      )}
    </ModalLayout>
  );
};

export default PullMessageModal;
