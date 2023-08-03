import styled from "@emotion/styled";

import CloseIcon from "@mui/icons-material/Close";

export const SendMessageContainer = styled.div`
  width: 90%;
  border-radius: 15px;
  background: var(--background, #F5F5F5);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.30);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SendMessageQuitButtonContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: right;
  padding-top: 10px;
`;

export const SendMessageQuitButton = styled(CloseIcon)`

`;

export const SendMessageContent = styled.div`
  width: 169px;
  color: var(--font-black, #303030);
  text-align: center;
  font-family: GmarketSansMedium;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const SendMessageButtonContainer = styled.div`
  padding-bottom: 10px;
`;
