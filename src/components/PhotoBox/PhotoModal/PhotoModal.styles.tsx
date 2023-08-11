import styled from "@emotion/styled";
import { Button, Box } from "@mui/material";

export const PhotoModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseModalBtn = styled.div`
  cursor: pointer;
  align-self: flex-end;
`;

export const PhotoModalIMG = styled.img`
  width: 236px;
  height: 603px;
  margin-bottom: 20px;
`;

export const PhotoModalButtonGroup = styled.div`
  width: 236px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PhotoDeleteBtn = styled.img`
  cursor: pointer;
  width: 54px;
  height: 54px;
  margin-left: -5px;
  margin-top: 5px;
`;

export const PhotoShareBtn = styled(Button)`
  width: 180px;
  height: 48px;
  color: #164300;
  background-color: #fff;
  border-radius: 10px;
  color: #164300;
  font-family: Cafe24Ssurround;
  font-size: 22px;
  font-weight: 700;
  :hover {
    background-color: #fff;
  }
`;
