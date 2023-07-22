import { NavBtn } from "./ManchineSwiper.styles";

export const PrevBtn = () => {
  return (
    <NavBtn className="prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
      >
        <path
          opacity="0.5"
          d="M1 10.7321C-0.333332 9.96225 -0.333331 8.03775 1 7.26795L13 0.339748C14.3333 -0.430052 16 0.5322 16 2.0718L16 15.9282C16 17.4678 14.3333 18.4301 13 17.6603L1 10.7321Z"
          fill="#8DC63F"
        />
      </svg>
    </NavBtn>
  );
};

export const NextBtn = () => {
  return (
    <NavBtn className="next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
      >
        <path
          opacity="0.5"
          d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 -8.94676e-07 17.4678 -8.27378e-07 15.9282L-2.21695e-07 2.0718C-1.54397e-07 0.532196 1.66667 -0.430055 3 0.339746L15 7.26795Z"
          fill="#8DC63F"
        />
      </svg>
    </NavBtn>
  );
};
