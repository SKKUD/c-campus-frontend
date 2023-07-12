import styled from "styled-components";

export const MessageListContainer = styled.div`
  width: 375px;
  height: 100vh;
  background-color: #F7F7F7;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const MessageListHoder = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageListDate = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 500;
`;

export const MessageListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  padding-top: 7px;
`;