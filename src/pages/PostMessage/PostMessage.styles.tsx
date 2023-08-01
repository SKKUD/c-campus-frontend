import styled from "@emotion/styled";

export const PostMessageContainer = styled.div`
  background-color: #D6EABA;
  width: 100%;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding-top: 90px;
  padding-bottom: 40px;
`;

export const PostMessageColors = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: center;
`;

export const PostMessageRandomSubjectContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const PostMessageRandomSubject = styled.div`
  display: flex;
  align-items: start;
`;

export const PostMessageRandomSubjectContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  /* width: 90%; */
  height: 56px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px solid var(--main-2, #164300);
  background: rgba(255, 255, 255, 0.70);

  color: var(--font-black, #303030);
  text-align: left;
  font-family: YeongdeokSea;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-left: 10px;
`;

export const PostMessageUpdateButton = styled.img`
  height: 48px;
  width: 48px;
`

export const PostMessageContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  border-radius: 10px;
  border: 0.5px solid var(--main-2, #164300);
  background: rgba(255, 255, 255, 0.70);
`;

export const PostMessageContentTo = styled.div`
  width: 90%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  vertical-align: middle;
  > .PostMessageTo {
    height: 56px;
    color: var(--font-grey-1, #808080);
    font-family: GmarketSansMedium;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-right: 5px;
  }

  > .PostMessageReceiver {
    height: 56px;
    color: var(--font-black, #303030);
    font-family: YeongdeokSea;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
    height: 50px;
    justify-content: center;
    align-items: center;
  }
`;

export const PostMessageContentFrame = styled.img`
  width: 99.591px;
  height: 254px;
  margin: 10px 10px 10px 10px;
`;

export const PostMessageContentText = styled.textarea`
  width: 60%;
  border: none;
  border-radius: 10px;
  background: #f3f9ea;
  color: var(--black, #252525);
  font-family: YeongdeokSea;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.32px;
  padding: 10px;
`;

export const PostMessageWriterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const PostMessageWriter = styled.div`
  display: flex;
  align-items: start;
  color: var(--font-grey-1, #808080);
  font-family: GmarketSansMedium;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 10px;
  margin-bottom: 10px;
`

export const PostMessageWriterContent = styled.input`
  height: 56px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px solid var(--main-2, #164300);
  background: rgba(255, 255, 255, 0.70);

  color: var(--font-black, #303030);
  font-family: YeongdeokSea;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* default */
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);

  padding-left: 20px;
  margin-bottom: 20px;

`;