import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const PopoverContainer = styled.div`
  background-color: #f5f5f5;
  width: 105px;
  height: 80px;
  display: flex;
  flex-direction: column;
  > :first-of-type {
    border-bottom: 0.3px solid #808080;
  }
`;

export const PopoverInner = styled(Button)`
  width: 105px;
  height: 40px;
  color: #808080;
  font-family: GmarketSans;
  text-align: center;
  line-height: 40px;
  border-radius: 0px;
`;
