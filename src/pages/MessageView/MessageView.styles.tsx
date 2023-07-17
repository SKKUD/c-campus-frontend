import styled from "styled-components";

export const MessageViewContainer = styled.div`
  width: 90vw;
  min-width: 300px;
  max-width: 375px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: #D6EABA;
`;

export const MessageViewTitle = styled.div`
  font-size: 20px;
  font-weight: 300;
  background-color: #FFFFFF;
  border-radius: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 5px 10px;
`;

export const MessageViewContent = styled.div`
  
`;

export const MessageViewContentReceiver = styled.p`
  margin-left: 15px;
  display: flex;
  flex-direction: left;
  font-size: 20px;
  font-weight: 500;
`;

export const MessageViewContentMainContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 20px 10px 20px 10px;
  display: flex;

  flex-direction: row;
  background-color: white;
  border-radius: 30px;
`;

export const MessageViewFourcutFrameContainer = styled.div`
  
`;

export const MessageViewContentMainText = styled.p`
  /* width: 230px; */
  text-align: left;
  margin-top: 0px;
  margin-left: 5px;
  font-size: 12px;
`;

export const MessageViewContentSender = styled.p`
  margin-right: 15px;
  display: flex;
  justify-content: right;
  font-size: 20px;
  font-weight: 500;
`;