import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import { store } from "./redux/store/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#81d8d0",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

const rootElement = document.getElementById("root");
// https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
