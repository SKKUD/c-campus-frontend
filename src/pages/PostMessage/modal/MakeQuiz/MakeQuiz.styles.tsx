import styled from "@emotion/styled";

import CloseIcon from "@mui/icons-material/Close";

export const MakeQuizContainer = styled.div`
  width: 90%;
  border-radius: 15px;
  background: var(--background, #F5F5F5);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.30);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MakeQuizQuitButtonContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: right;
  padding-top: 10px;
`;

export const MakeQuizQuitButton = styled(CloseIcon)`

`;

export const MakeQuizContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const MakeQuizContentLabel = styled.div`
  width: 10%;
  color: var(--font-grey-1, #808080);
  text-align: center;
  font-family: GmarketSansMedium;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const MakeQuizContent = styled.textarea`
  resize: none;
  width: 80%;
  border-radius: 10px;
  color: var(--font-black, #303030);
  text-align: center;
  font-family: YeongdeokSea;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  background: #EDEDED;
  padding-left: 10px;
  margin-left: 10px;
  border: none;
`;

export const MakeQuizAnswerContainer = styled.div`
  width: 90%;
  height: 66px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const MakeQuizAnswerLabel = styled.div`
  width: 10%;
  color: var(--font-grey-1, #808080);
  text-align: center;
  font-family: GmarketSansMedium;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const MakeQuizAnswer = styled.input`
  width: 80%;
  height: 40px;
  color: var(--font-black, #303030);
  text-align: center;
  font-family: YeongdeokSea;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  border-radius: 10px;
  background: #EDEDED;
  padding-left: 10px;
  margin-left: 10px;
  border: none;
`;

export const MakeQuizButtonContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;  
  padding-bottom: 10px;
`;
