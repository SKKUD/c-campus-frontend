import {
  FrameColorCheck,
  PaletteContainer,
  RelativeBtnCotainer,
} from "./FramePalette.styles";
import { ReactComponent as Btn1 } from "../../../assets/images/4cut_c1.svg";
import { ReactComponent as Btn2 } from "../../../assets/images/4cut_c2.svg";
import { ReactComponent as Btn3 } from "../../../assets/images/4cut_c3.svg";
import { ReactComponent as Btn4 } from "../../../assets/images/4cut_c4.svg";
import { ReactComponent as Btn5 } from "../../../assets/images/4cut_c5.svg";
import { ReactComponent as Btn6 } from "../../../assets/images/4cut_c6.svg";
import { ReactComponent as Btn7 } from "../../../assets/images/4cut_c7.svg";
import { ReactComponent as CheckIcon } from "../../../assets/images/check_icon.svg";

interface FramePaletteProps {
  setFrame: React.Dispatch<React.SetStateAction<number>>;
  frameNum: Number;
}

const FramePalette = ({ frameNum, setFrame }: FramePaletteProps) => {
  return (
    <PaletteContainer>
      <RelativeBtnCotainer>
        <Btn1 onClick={() => setFrame(1)} />
        {frameNum === 1 && (
          <FrameColorCheck>
            <CheckIcon />
          </FrameColorCheck>
        )}
      </RelativeBtnCotainer>
      <RelativeBtnCotainer>
        <Btn2 onClick={() => setFrame(2)} />
        {frameNum === 2 && (
          <FrameColorCheck>
            <CheckIcon />
          </FrameColorCheck>
        )}
      </RelativeBtnCotainer>
      <RelativeBtnCotainer>
        <Btn3 onClick={() => setFrame(3)} />
        {frameNum === 3 && (
          <FrameColorCheck>
            <CheckIcon />
          </FrameColorCheck>
        )}
      </RelativeBtnCotainer>
      <RelativeBtnCotainer>
        <Btn4 onClick={() => setFrame(4)} />
        {frameNum === 4 && (
          <FrameColorCheck>
            <CheckIcon />
          </FrameColorCheck>
        )}
      </RelativeBtnCotainer>
      <RelativeBtnCotainer>
        <Btn5 onClick={() => setFrame(5)} />
        {frameNum === 5 && (
          <FrameColorCheck>
            <CheckIcon />
          </FrameColorCheck>
        )}
      </RelativeBtnCotainer>
      <RelativeBtnCotainer>
        <Btn6 onClick={() => setFrame(6)} />
        {frameNum === 6 && (
          <FrameColorCheck>
            <CheckIcon />
          </FrameColorCheck>
        )}
      </RelativeBtnCotainer>
      <RelativeBtnCotainer>
        <Btn7 onClick={() => setFrame(7)} />
        {frameNum === 7 && (
          <FrameColorCheck>
            <CheckIcon />
          </FrameColorCheck>
        )}
      </RelativeBtnCotainer>
    </PaletteContainer>
  );
};

export default FramePalette;
