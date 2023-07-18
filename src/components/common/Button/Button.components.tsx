import { 
  ButtonContainer,
  GreenButton 
} from "./Button.styles";

interface IButton {
  content: string,
}

// receive content and make it to green button
const Button = ({content}: IButton) => {
  return (
    <ButtonContainer>
      <GreenButton>{content}</GreenButton>
    </ButtonContainer>
  );
}

export default Button;