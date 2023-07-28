import styled from "@emotion/styled";

export const MessageListHeader = styled.div`
  width: 100vw;
  min-width: 250px;
  max-width: 340px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const MessageListHeaderMessageCount = styled.div`
  color: var(--font-black, #303030);
  text-align: right;
  font-family: GmarketSansMedium;
  font-size: 16px;
  font-style: normal;
  font-weight: 1000;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const MessageListContainer = styled.div`
  width: 100vw;
  /* height: 100vh; */
  background-color: #f7f7f7;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const MessageListHoder = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  min-width: 250px;
  max-width: 340px;
`;

export const MessageListDate = styled.div`
  width: 100%;
  min-width: 250px;
  max-width: 340px;
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
  max-width: 340px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  padding-top: 8px;
`;

export const MessageListDataContainer = styled.div`
  width: 90vw;
  min-width: 250px;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`