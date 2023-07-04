import styled from "styled-components";

export const MessageFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 7px;
  padding-right: 7px;
`
export const MessageHolder = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 40px;
  height: 40px;
`

export const MessageContent = styled.p`
  width: 40px;
  height: 12px;
  font-size: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
`;