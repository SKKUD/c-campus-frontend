import styled from "styled-components";

// mobile

export const MessageViewMobileContainer = styled.div<{ backgroundColor: string }>`
  .congcamMessage {
    background-color: ${(props) => props.backgroundColor};
    padding-top: 12px;
    padding-bottom: 12px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

export const MessageViewContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  width: 100vw;
  min-height: 100vh;
  overflow: scroll;
  padding-top: 60px;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

export const MessageViewFieldContainer = styled.div`
  width: 100%;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  align-items: center;
  font-family: YeongdeokSea;

  @media (min-width: 1024px) {
    max-width: 450px;
    margin: 0;
  }
`;

export const MessageViewPublicToggleContainer = styled.div`
  width: 95%;
  max-width: 375px;
  display: flex;
  justify-content: right;
  margin: 0 auto;
  margin-bottom: -8px;
  @media (min-width: 1024px) {
    width: 100%;
    max-width: 450px;
    margin: 0;
    margin-right: 0px;
    margin-top: 15px;
  }
`;

export const MessageViewTitle = styled.div`
  width: 90vw;
  max-width: 343px;
  /* height: 56px; */
  margin: auto;
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
  font-family: YeongdeokSea;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  word-break: keep-all;
  padding: 10px;
  padding-top: 5px;
  @media (min-width: 1024px) {
    max-width: 450px;
  }
  .categoryText {

  }
`;

export const MessageViewContent = styled.div`
  max-width: 375px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    max-width: 450px;
  }
`;

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
    font-family: GmarketSans;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.32px;
    margin-right: 5px;
  }

  > .MessageViewReceiverMessageData {
    color: var(--font-black, #303030);
    font-family: YeongdeokSea;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
    padding-bottom: 5px;
  }
  @media (min-width: 1024px) {
    max-width: 450px;
  }
`;

export const MessageViewContentMainContainer = styled.div`
  width: 90vw;
  max-width: 343px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px 10px 10px 10px;
  display: flex;
  margin: auto;
  flex-direction: row;
  border-radius: 10px;
  border: 0.5px solid var(--main-2, #164300);
  background: rgba(255, 255, 255, 0.7);
  @media (min-width: 1024px) {
    max-width: 450px;
  }
`;

export const MessageViewFourcutFrameContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {

  }
`;

export const MessageViewContentFrame = styled.img`
  width: 99px;
  height: 254px;

  @media (min-width: 1024px) {
    width: 205.814px;
    height: 525px;
    margin-top: 60px;
    margin-right: 20px;
  }
`;

export const MessageViewContentMainText = styled.p`
  text-align: left;
  margin-top: 0px;
  margin-left: 5px;
  min-height: 200px;
  color: var(--black, #252525);
  font-family: YeongdeokSea;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.32px;
  @media (min-width: 1024px) {
    max-width: 450px;
    height: 250px;
    overflow: scroll;
  }
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
    font-family: GmarketSans;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.32px;
    margin-right: 5px;
    margin-top: 20px;
  }

  > .MessageViewSenderMessageData {
    color: var(--font-black, #303030);
    font-family: YeongdeokSea;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
    margin-right: 4px;
    padding-bottom: 5px;
  }
  @media (min-width: 1024px) {
    max-width: 450px;
  }
`;

export const GreenBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 30px;
  @media (min-width: 1024px) {
    max-width: 1024px;
    justify-content: right;
    margin-top: 20px;
  }
`;

// web
export const MessageViewWebFourcutContainer = styled.div`
`;

export const MessageViewSpeechBubble = styled.div`
  position: relative;
  width: 200px;
  height: 40px;
  padding: 0px;
  background: #FFFFFF;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;

  ::after {
    position: absolute;
    border-style: solid;
    border-width: 15px 15px 0;
    border-color: #FFFFFF transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -15px;
    left: 39px;
  }
`;
