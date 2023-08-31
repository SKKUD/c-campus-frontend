import { DisabledGreenButton } from "./Button.styles";

interface IButton {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const DisabledGreenBtn = ({ content, onClick, disabled = false }: IButton) => {
  return (
    <DisabledGreenButton onClick={onClick}>
      {content}
    </DisabledGreenButton>
  );
};

export default DisabledGreenBtn;
