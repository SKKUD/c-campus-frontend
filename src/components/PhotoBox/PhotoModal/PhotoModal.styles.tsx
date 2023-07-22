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
  align-self: flex-end;
`;

export const PhotoModalIMG = styled.img`
  width: 236px;
  height: 603px;
  margin-bottom: 20px;
`;

export const PhotoShareBtn = styled(Button)`
  width: 201px;
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
