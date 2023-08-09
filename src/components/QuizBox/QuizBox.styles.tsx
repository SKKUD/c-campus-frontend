import styled from "@emotion/styled";
import { Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

export const QuizBoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90vw;
  max-width: 370px;

  background: var(--background, #F5F5F5);
  border-radius: 20px;
  margin: auto;
  margin-top: 100px;
`;

export const QuizBoxQuitButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const QuizBoxQuitButton = styled(CloseIcon)`
  background-color: #F5F5F5;
  margin-top: 10px;
  margin-right: 10px;
`;

export const QuizBoxQuizContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const QuizBoxTextAreaContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const QuizBoxTextArea = styled.input`
  background-color: #ededed;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 10px;
  width: 296px;
  height: 48px;
  line-height: 30px;
  margin-bottom: 15px;
`;

export const QuizBoxInformation = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  color: ${(props) => props.color};
  font-size: 12px;
  margin-bottom: 10px;
`;
export const QuizBoxCheckButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const QuizBoxCheckButton = styled(Button)`
  width: 201px;
  height: 52px;
  font-size: 30px;
  font-weight: 500;
  background-color: #8dc63f;
  border: none;
  color: white;
  border-radius: 28px;
  margin: auto;
  margin-bottom: 20px;
`;
