import styled from "styled-components";
import { Grid } from "@mui/material";

export const MobileHeaderContainer = styled.div`
  width: 100%;
  height: calc(100vw / 6.25);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const MobileHeaderGrid = styled(Grid)`
  height: calc(100vw / 6.25);
`;

export const MobileHeaderIMG = styled.img`
  width: 100%;
`;

export const WebHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
`;
