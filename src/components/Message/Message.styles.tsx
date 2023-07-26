import styled from "styled-components";

export const MessageFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
`

export const MessageHolder = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 10px;
  background: #FFF;

  /* default */
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MessageImage = styled.img`
  width: 52px;
  height: 52px;
`

export const MessageContent = styled.p`
  width: 64px;
  height: 13px;
  color: var(--font-black, #303030);
  text-align: left;
  font-family: YeongdeokSea;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-top: 5px;
  margin-bottom: 30px;
  padding-left: 6px;
  padding-right: 6px;
`;