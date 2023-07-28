import styled from "@emotion/styled";

export const MessageFeedContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  background: var(--background, #F5F5F5);
`;

export const OpenMessageHeader = styled.div`
  width: 100vw;
  max-width: 300px;
  height: 30px;
  margin: auto;
  background: var(--background, #F5F5F5);
`;

export const OpenMessageHeaderContent = styled.p`
  padding-left: 15px;
  margin-bottom: 10px;
  color: var(--font-black, #303030);
  text-align: left;
  font-family: GmarketSansMedium;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const OpenMessageContainer = styled.div`
  background: var(--background, #F5F5F5);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin: auto;
`;

export const OpenMessageContent = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  width: 90vw;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding-bottom: 10px;

  border-radius: 10px;
  border: 0.3px solid var(--main-2, #164300);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
`

export const OpenMessageContentTitle = styled.p`
  text-align: left;
  padding-left: 10px;
  color: var(--font-black, #303030);
  text-align: left;
  font-family: YeongdeokSea;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  margin-bottom: 5px;
`;

export const OpenMessageContentMainText = styled.p`
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
  color: var(--font-black, #303030);
  font-family: YeongdeokSea;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.32px;
  margin-top: 5px;
`;

export const OpenMessageContentSender = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  text-align: right;
  align-items: center;
  padding-right: 10px;
  color: var(--font-black, #303030);
  text-align: right;
  font-family: YeongdeokSea;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;

  > .SenderFrom {
    color: var(--font-grey-1, #808080);
    font-family: Cafe24Ssurround;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.28px;
    margin-right: 5px;
    margin-bottom: 4px;
  }
`;
