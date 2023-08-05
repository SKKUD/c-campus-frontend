import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CropModaContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 60px 0 10vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonWrap = styled.div`
  width: 100vw;
  height: 72px;
  position: relative;
`;

export const CheckButton = styled(Button)`
  background-color: #e4e4e4;
  width: 72px;
  height: 72px;
  border-radius: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CancleButton = styled(Button)`
  font-size: 20px;
  color: #fff;
  justify-self: flex-end;
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translate(0, -50%);
`;
