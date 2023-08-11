import styled from "@emotion/styled";

import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

export const AskPhotopostContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  background: var(--background, #f5f5f5);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AskPhotopostContent = styled.div`
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

export const AskPhotopostButtonContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const AskPhotopostWhiteBtn = styled(Button)`
  width: 30%;
  color: #808080;
  text-align: center;
  font-family: Cafe24Ssurround;
  font-size: 22px;
  font-weight: 700;
`;
