import styled from "@emotion/styled";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export const ShareUrlContent = styled(CopyToClipboard)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-top: 30px;
  background-color: #e0ecd1;
  border-radius: 28px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  :focus,
  :hover {
    background-color: #b4bda9;
  }
`;

export const ShareUrlSvgContainer = styled.div`
  width: 32px;
  height: 32px;
`;

export const ShareUrlImgContainer = styled.img`
  width: 32px;
  height: 32px;
  padding-right: 5px;
`;

export const ShareText = styled.div`
  color: var(--font-black, #303030);
  text-align: center;
  font-family: GmarketSans;
  font-size: 22px;
  font-weight: 400;
  line-height: 35px;
  padding: 30px 30px 0px;
  word-break: keep-all;
  @media (max-width: 485px) {
    font-size: 18px;
    line-height: 30px;
    padding: 30px 30px 0px;
  }
`;