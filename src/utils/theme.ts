import { createTheme } from "@mui/material";
import "./font.css";

export const conTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8DC63F",
      contrastText: "#303030",
      dark: "#2B6652",
    },
    background: {
      default: "#D8EFBA",
      paper: "#FFF",
    },
  },
  typography: {
    fontFamily: [
      '"omyu_pretty"',
      '"Cafe24Ssurround"',
      '"Cafe24SsurroundAir"',
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
  },
});
