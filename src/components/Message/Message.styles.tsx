import styled from "styled-components";

export const MessageFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
`
export const MessageHolder = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 64px;
  height: 64px;
`

export const MessageContent = styled.p`
  width: 64px;
  height: 13px;
  font-size: 9px;
  margin-top: 5px;
  margin-bottom: 10px;
`;