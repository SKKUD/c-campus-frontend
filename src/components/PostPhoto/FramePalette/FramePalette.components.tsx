import { PaletteContainer } from "./FramePalette.styles";
import { ReactComponent as Btn1 } from "../../../assets/images/4cut_c1.svg";
import { ReactComponent as Btn2 } from "../../../assets/images/4cut_c2.svg";
import { ReactComponent as Btn3 } from "../../../assets/images/4cut_c3.svg";
import { ReactComponent as Btn4 } from "../../../assets/images/4cut_c4.svg";
import { ReactComponent as Btn5 } from "../../../assets/images/4cut_c5.svg";
import { ReactComponent as Btn6 } from "../../../assets/images/4cut_c6.svg";
import { ReactComponent as Btn7 } from "../../../assets/images/4cut_c7.svg";

interface FramePaletteProps {
  setFrame: React.Dispatch<React.SetStateAction<number>>;
}

const FramePalette = ({ setFrame }: FramePaletteProps) => {
  return (
    <PaletteContainer>
      <Btn1 onClick={() => setFrame(1)} />
      <Btn2 onClick={() => setFrame(2)} />
      <Btn3 onClick={() => setFrame(3)} />
      <Btn4 onClick={() => setFrame(4)} />
      <Btn5 onClick={() => setFrame(5)} />
      <Btn6 onClick={() => setFrame(6)} />
      <Btn7 onClick={() => setFrame(7)} />
    </PaletteContainer>
  );
};

export default FramePalette;
