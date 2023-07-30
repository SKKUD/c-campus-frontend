import styled from "styled-components";

export const MessageFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
`

export const MessageHolder = styled.div`
  width: 15vw;
  max-width: 64px;
  height: 15vw;
  max-height: 64px;
  border-radius: 10px;
  background: #fff;

  /* default */
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageImage = styled.img`
  width: 80%;
`;

export const MessageContent = styled.p`
  width: 15vw;
  max-width: 64px;
  height: 20px;
  color: var(--font-black, #303030);
  text-align: left;
  font-family: YeongdeokSea;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-top: 5px;
  margin-bottom: 30px;
  padding-left: 6px;
  padding-right: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;