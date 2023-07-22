import { createTheme } from "@mui/material";
import "./font.css";

export const conTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8DC63F",
      contrastText: "#303030",
    },
    background: {
      default: "#D8EFBA",
      paper: "#FFF",
    },
  },
  typography: {
    fontFamily: [
      '"YeongdeokSea"',
      '"Cafe24Ssurround"',
      '"Cafe24SsurroundAir"',
      '"GmarketSansMedium"',
      "-apple-system",
      "BlinkMacSystemFont",
      "system-ui",
      "Roboto",
      '"Helvetica Neue"',
      '"Segoe UI"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Cafe24SsurroundAir",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Cafe24Ssurround",
        },
      },
    },
  },
});
