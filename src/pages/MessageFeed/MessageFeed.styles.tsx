import styled from "@emotion/styled";

export const MessageFeedContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  background: var(--background, #f5f5f5);
  overflow: hidden;
  box-sizing: border-box;
`;

export const OpenMessageHeader = styled.div`
  width: 90%;
  max-width: 380px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: var(--background, #f5f5f5);
`;

export const OpenMessageHeaderContent = styled.p`
  padding-left: 5px;
  margin-bottom: 10px;
  color: var(--font-black, #303030);
  text-align: left;
  font-family: GmarketSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const OpenMessageContainer = styled.div`
  background: var(--background, #f5f5f5);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 140px);
  overflow: scroll;
  @media (min-width: 1024px) {
    height: calc(100vh - 210px);
  }
`;

export const OpenMessageScrollContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const OpenMessageContent = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 90%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding-bottom: 10px;

  border-radius: 10px;
  border: 0.3px solid var(--main-2, #164300);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;

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

export const OpenMesageEmpty = styled.div`
  width: 90%;
  max-width: 375px;
  margin: 100px auto;
  padding: 30px 0;
  background-color: #ffffff;
  border-radius: 10px;
  color: var(--font-black, #303030);
  text-align: center;
  font-family: GmarketSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 1000;
  line-height: normal;
  letter-spacing: -0.28px;
  @media (min-width: 1024px) {
    margin: 70px auto;
  }
`;