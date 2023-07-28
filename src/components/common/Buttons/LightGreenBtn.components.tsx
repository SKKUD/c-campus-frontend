import { LightGreenButton } from "./Button.styles";

interface IButton {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const LightGreenBtn = ({ content, onClick }: IButton) => {
  return (
    <LightGreenButton onClick={onClick} disabled={false}>
      {content}
    </LightGreenButton>
  );
};

export default LightGreenBtn;
