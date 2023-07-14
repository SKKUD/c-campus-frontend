import styled from "styled-components";

export const QuizBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 341px;
  background-color: #FFFFFF;
  border-radius: 20px;
  margin: auto;
  margin-top: 100px;
`;

export const QuizBoxQuitButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`

export const QuizBoxQuitButton = styled.button`
  background-color: #FFFFFF;
  font-size: 25px;
  color: black;
  width: 25px;
  height: 25px;
  border: none;
  margin: 15px 10px 0px 20px;
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

export const QuizBoxInformation = styled.div<{ color: string}>`
  display: flex;
  justify-content: center;
  color: ${props => props.color};
  font-size: 12px;
  margin-bottom: 10px;
`
export const QuizBoxCheckButtonContainer = styled.div`
  display: flex;
`;
