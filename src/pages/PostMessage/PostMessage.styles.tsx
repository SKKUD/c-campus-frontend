import styled from "@emotion/styled";

export const PostMessageContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 100vh;
  overflow: scroll;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
  }
`;
export const PostMessageFieldContainer = styled.div`
  width: 100%;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding-top: 90px;
  padding-bottom: 40px;
  @media (min-width: 1024px) {
    max-width: 450px;
    margin: 0;
  }
`;

export const PostMessageColors = styled.div`
  display: flex;
  width: 83%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const PostMessageColor1 = styled.div`
  height: 40px;
  width: 40px;
  background-color: #d6eaba;
  border-radius: 20px;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostMessageColor2 = styled.div`
  height: 40px;
  width: 40px;
  background-color: #d9e1ce;
  border-radius: 20px;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostMessageColor3 = styled.div`
  height: 40px;
  width: 40px;
  background-color: #c1d3a7;
  border-radius: 20px;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostMessageColor4 = styled.div`
  height: 40px;
  width: 40px;
  background-color: #daefae;
  border-radius: 20px;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostMessageColor5 = styled.div`
  height: 40px;
  width: 40px;
  background-color: #bfd8ba;
  border-radius: 20px;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostMessageColorCheck = styled.img`
  height: 16px;
  width: 16px;
`;

export const PostMessageRandomSubjectContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const PostMessageRandomSubject = styled.div`
  display: flex;
  align-items: start;
  font-family: GmarketSans;
  color: #808080;
  font-weight: 400;
`;

export const PostMessageNoticeKakaoBrowser = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 60px;
  padding: 10px;
  word-break: keep-all;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  border: 0.5px solid var(--main-2, #164300);
  border-radius: 10px;
  color: #303030;
  text-align: center;
  font-family: GmarketSans;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const PostMessageRandomSubjectContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  word-break: keep-all;

  /* width: 90%; */
  /* height: 56px; */
  margin-top: 3px;
  padding: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px solid var(--main-2, #164300);
  background: rgba(255, 255, 255, 0.7);

  color: var(--font-black, #303030);
  text-align: left;
  font-family: YeongdeokSea;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  .SubjectContent {
    padding-left: 5px;
  }
`;

export const PostMessageUpdateButton = styled.img`
  height: 48px;
  width: 48px;
`;

export const PostMessageContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  border-radius: 10px;
  border: 0.5px solid var(--main-2, #164300);
  background: rgba(255, 255, 255, 0.7);
`;

export const PostMessageContentTo = styled.div`
  width: 90%;
  height: 36px;
  margin-top: 8px;
  margin-bottom: -3px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  vertical-align: middle;
  > .PostMessageTo {
    height: 56px;
    color: var(--font-grey-1, #808080);
    font-family: GmarketSans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
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

export const PostMessageContentFrameContainer = styled.div`
  width: 99.591px;
  height: 254px;
  margin: 10px;
  position: relative;
`;

export const PostMessageContentFrame = styled.img`
  width: 99.59px;
  height: 254px;

  @media (min-width: 1024px) {
    width: 205.814px;
    height: 525px;
  }
`;

export const TakePicIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  width: 66px;
  height: 66px;
`;

export const PostMessageContentText = styled.textarea`
  resize: none;
  width: 60%;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: var(--black, #252525);
  font-family: YeongdeokSea;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.32px;
  padding: 10px;
  :focus {
    outline: none;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 300px;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
  }
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
  font-family: GmarketSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 8px;
  margin-bottom: 4px;
`;

export const PostMessageWriterContent = styled.input`
  height: 56px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px solid var(--main-2, #164300);
  background: rgba(255, 255, 255, 0.7);

  color: var(--font-black, #303030);
  font-family: YeongdeokSea;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* default */
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);

  padding-left: 20px;
  margin-bottom: 30px;
  :focus {
    outline: none;
  }
`;
export const PostMessageWebFourcutContaner = styled.div`
  padding-top: 30px;
`;

interface ButtonWrapperProps {
  done: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  @media (min-width: 1280px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-left: ${(props) => (props.done ? "650px" : "400px")};
  }
`;