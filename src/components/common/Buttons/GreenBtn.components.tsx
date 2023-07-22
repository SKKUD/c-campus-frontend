import { GreenButton } from "./Button.styles";

interface IButton {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const GreenBtn = ({ content, onClick }: IButton) => {
  return (
    <GreenButton onClick={onClick} disabled={false}>
      {content}
    </GreenButton>
  );
};

export default GreenBtn;
