import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const GreenButton = styled(Button)`
  background-color: #164300;
  color: #ffffff;
  width: 201px;
  height: 48px;
  font-family: Cafe24Ssurround;
  font-size: 22px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  &.MuiButton-root:hover {
    background-color: #164300;
  }
  &.Mui-disabled {
    background: rgba(98, 125, 85, 0.5);
    backdrop-filter: blur(5px);
  }
`;

export const WhiteButton = styled(Button)`
  background: rgba(255, 255, 255, 0.7);
  color: #164300;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  width: 201px;
  height: 48px;
  font-family: Cafe24Ssurround;
  font-size: 22px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.MuiButton-root:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;

export const SmallWhiteButton = styled(Button)`
  background: rgba(255, 255, 255, 0.7);
  color: #164300;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  width: 30%;
  height: 48px;
  font-family: Cafe24Ssurround;
  font-size: 22px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  &.MuiButton-root:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;

export const LightGreenButton = styled(Button)`
  width: 101px;
  height: 32px;
  flex-shrink: 0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
  border-radius: 3px;
  background: rgba(22, 67, 0, 0.70);
  display: flex;
  justify-content: center;
  align-items: center;

  color: #FFF;
  text-align: center;
  font-family: GmarketSansMedium;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &.MuiButton-root:hover {
    background: rgba(255, 255, 255, 0.7);
    color: rgba(22, 67, 0, 0.70);
  }
`