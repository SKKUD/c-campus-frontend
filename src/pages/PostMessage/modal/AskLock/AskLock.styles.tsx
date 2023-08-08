import styled from "@emotion/styled";

import CloseIcon from "@mui/icons-material/Close";

export const AskLockContainer = styled.div`
  width: 90%;
  border-radius: 15px;
  background: var(--background, #F5F5F5);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.30);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AskLockContent = styled.div`
  width: 169px;
  color: var(--font-black, #303030);
  text-align: center;
  font-family: GmarketSans;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const AskLockButtonContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;

`;

export const AskLockQuitButtonContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: right;
  padding-top: 10px;
`;

export const AskLockQuitButton = styled(CloseIcon)`

`;

export const AskLockWhiteBtn = styled.button`
  width: 30%;
`;