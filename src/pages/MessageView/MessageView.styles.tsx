import styled from "styled-components";

export const MessageViewContainer = styled.div`
  max-width: 375px;
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  align-items: center;
  background-color: #d6eaba;
  font-family: YeongdeokSea;
`;

export const MessageViewPublicToggleContainer = styled.div`
  width: 90vw;
  max-width: 375px;
  display: flex;
  justify-content: right;
  margin-right: 10px;
`;

export const MessageViewTitle = styled.div`
  width: 90vw;
  max-width: 343px;
  height: 56px;
  /* flex-shrink: 0; */
  border-radius: 7px;
  border: 0.5px solid var(--main-2, #164300);
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px 0.5px 0.5px 0.5px;
  color: var(--font-black, #303030);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  word-break: keep-all;
`;

export const MessageViewContent = styled.div``;

export const MessageViewContentReceiver = styled.div`
  margin: 0px;
  margin-top: 20px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  height: 36px;

  > .MessageViewReceiverTo {
    color: var(--font-grey-1, #808080);
    font-family: GmarketSansMedium;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.32px;
    margin-right: 5px;
  }

  > .MessageViewReceiverMessageData {
    color: var(--font-black, #303030);
    /* font-family: Yeongdeok Sea; */
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;

export const MessageViewContentMainContainer = styled.div`
  width: 90vw;
  max-width: 343px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 20px 10px 10px 10px;
  display: flex;

  flex-direction: row;
  border-radius: 10px;
  border: 0.5px solid var(--main-2, #164300);
  background: rgba(255, 255, 255, 0.7);
`;

export const MessageViewFourcutFrameContainer = styled.div``;

export const MessageViewContentMainText = styled.p`
  text-align: left;
  margin-top: 0px;
  margin-left: 5px;

  color: var(--black, #252525);
  /* font-family: Yeongdeok Sea; */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.32px;
`;

export const MessageViewContentSender = styled.div`
  margin-top: 5px;
  margin-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  font-weight: 500;
  height: 36px;

  > .MessageViewSenderFrom {
    color: var(--font-grey-1, #808080);
    font-family: GmarketSansMedium;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.32px;
    margin-right: 5px;
  }

  > .MessageViewSenderMessageData {
    color: var(--font-black, #303030);
    /* font-family: Yeongdeok Sea; */
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;

export const GreenBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`