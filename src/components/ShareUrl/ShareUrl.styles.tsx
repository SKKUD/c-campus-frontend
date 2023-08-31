import styled from "@emotion/styled";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export const ShareUrlContent = styled(CopyToClipboard)<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-top: 30px;
  background-color: ${(props) => props.color};
  border-radius: 28px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.10));
`;

export const ShareUrlSvgContainer = styled.div`
  width: 32px;
  height: 32px;
`

export const ShareUrlImgContainer = styled.img`
  width: 32px;
  height: 32px;
  padding-right: 5px;
`;