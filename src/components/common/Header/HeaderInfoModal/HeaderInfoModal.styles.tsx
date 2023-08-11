import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
`;

export const InfoPaper = styled.img`
  width: 100%;
`;

export const BtnWrapper = styled.div`
  position: relative;
`;

export const CloseBtn = styled(IconButton)`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 8px;
  right: 8px;
`;
