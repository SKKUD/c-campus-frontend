import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const ButtonGroup = styled.div`
  width: 172px;
  display: flex;
  justify-content: space-between;
  margin: 48px auto;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const StyledIconButton = styled(IconButton)`
  width: 76px;
  height: 76px;
  background-color: #e4e4e4;
  border-radius: 50px;
  > img.camera {
    width: 48px;
    height: 48px;
  }
  > img.album {
    width: 42px;
    height: 42px;
  }
  :hover {
    background-color: #e4e4e4;
  }
`;
