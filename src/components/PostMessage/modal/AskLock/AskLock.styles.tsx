import styled from "@emotion/styled";

import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

export const AskLockContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  background: var(--background, #f5f5f5);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.3);
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
  margin-bottom: 10px;
`;

export const AskLockQuitButton = styled(CloseIcon)``;

export const AskLockWhiteBtn = styled(Button)`
  width: 30%;
  color: #808080;
  text-align: center;
  font-family: Cafe24Ssurround;
  font-size: 22px;
  font-weight: 700;
  @media (max-width: 350px) {
    font-size: 18px;
  }
`;
