import styled from "@emotion/styled";

import CloseIcon from "@mui/icons-material/Close";

export const ShowImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90vw;
  max-width: 300px;

  border-radius: 20px;
  margin: auto;
`;

export const ShowImgQuitButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 60px;
`;

export const ShowImgQuitButton = styled(CloseIcon)`
  background-color: transparent;
  margin-right: 10px;
`;

export const ShowImgImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ShowImgImgContent = styled.img`
  width: 236px;
  height: 602px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ShowImgButtonContainer = styled.div`
  margin-bottom: 20px;
`;