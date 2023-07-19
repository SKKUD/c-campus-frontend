import { WhiteButton } from "./Button.styles";

interface IButton {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const WhiteBtn = ({ content, onClick }: IButton) => {
  return <WhiteButton onClick={onClick}>{content}</WhiteButton>;
};

export default WhiteBtn;
