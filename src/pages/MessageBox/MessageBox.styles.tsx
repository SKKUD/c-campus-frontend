import styled from "@emotion/styled";

export const MessageListHeader = styled.div`
  width: 100%;
  min-width: 250px;
  max-width: 320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 5px;
`;

export const MessageListHeaderMessageCount = styled.div`
  color: var(--font-black, #303030);
  text-align: right;
  font-family: GmarketSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 1000;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const MessageListContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7f7f7;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 10px 0px;
`;

export const MessageScrollContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
`;

export const MessageDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll;
  @media (min-width: 1024px) {
    height: calc(708px - 110px);
  }
`;

export const MessageListHoder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  max-width: 320px;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const MessageListDate = styled.div`
  width: 100%;
  min-width: 250px;
  max-width: 320px;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  color: var(--font-grey-1, #808080);
  font-family: Cafe24Ssurround;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const MessageListContent = styled.div`
  width: 100%;
  min-width: 250px;
  max-width: 320px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  padding-top: 8px;
`;

export const MessageBoxEmpty = styled.div`
  width: 90%;
  max-width: 375px;
  margin: auto;
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

  margin-top: 100px;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: 1024px) {
    margin-top: 80px;
  }
`;