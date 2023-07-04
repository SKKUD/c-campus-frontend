import styled from "styled-components";

export const MessageListContainer = styled.div`
  width: 440px;
  height: 100vh;
  margin: auto;
  background-color: #B9B9B9;
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
`;

export const MessageListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;