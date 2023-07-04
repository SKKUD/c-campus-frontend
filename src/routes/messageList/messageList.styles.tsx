import styled from "styled-components";

export const MessageListContainer = styled.div`
  width: 320px;
  height: 100vh;
  background-color: #B9B9B9;
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
`;

export const MessageListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  padding-top: 7px;
`;