import { GreenButton } from "./Button.styles";

interface IButton {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const GreenBtn = ({ content, onClick, disabled = false }: IButton) => {
  return (
    <GreenButton onClick={onClick} disabled={disabled}>
      {content}
    </GreenButton>
  );
};

export default GreenBtn;
