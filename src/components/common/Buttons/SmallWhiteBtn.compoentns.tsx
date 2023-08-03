import { SmallWhiteButton } from "./Button.styles";

interface IButton {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SmallWhiteBtn = ({ content, onClick }: IButton) => {
  return <SmallWhiteButton onClick={onClick}>{content}</SmallWhiteButton>;
};

export default SmallWhiteBtn;
