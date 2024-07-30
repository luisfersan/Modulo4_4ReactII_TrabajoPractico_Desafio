import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalProvider } from "./context/GlobalContext";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </GlobalProvider>
    </React.StrictMode>
);
