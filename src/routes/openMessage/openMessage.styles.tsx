import styled from "styled-components";

export const OpenMessageHeader = styled.div`
  width: 320px;
  height: 30px;
  margin: auto;
`;

export const OpenMessageHeaderContent = styled.p`
  text-align: left;
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const OpenMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: auto;
`;

export const OpenMessageContent = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 20px;
`

export const OpenMessageContentTitle = styled.p`
  text-align: left;
  padding-left: 10px;
`;

export const OpenMessageContentMainText = styled.p`
  font-size: 12px;
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
`;

export const OpenMessageContentSender = styled.p`
  font-size: 10px;
  text-align: right;
  padding-right: 10px;
`;
