import styled from "@emotion/styled";

import CloseIcon from "@mui/icons-material/Close";

export const ShowImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90vw;
  max-width: 370px;

  border-radius: 20px;
  margin: auto;
  margin-top: 100px;
`;

export const ShowImgQuitButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const ShowImgQuitButton = styled(CloseIcon)`
  background-color: transparent;
  margin-top: 10px;
  margin-right: 10px;
`;

export const ShowImgImgContent = styled.img`
  width: 236px;
  height: 602px;
`;