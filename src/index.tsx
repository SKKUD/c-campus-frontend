import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { conTheme } from "./utils/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={conTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
