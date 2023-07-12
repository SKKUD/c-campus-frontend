import styled from "styled-components";

export const MessageListHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 5px;
  padding-left: 5px;
  width: 310px;
  height: 30px;
  margin: auto;
  background-color: #B9B9B9;
  padding-bottom: 5px;
  align-items: center;
`;

export const MessageListNumber = styled.p`
  padding-left: 10px;
`;

export const MessageListButton = styled.button`
  padding-right: 10px;
  width: 70px;
  height: 20px;
  background-color: #8DC63F;
  border: none;
  border-radius: 10px;
  font-size: 9px;
  color: white;
`;