import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root/Root";
import "./base.scss";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
        <Root />
    </ThemeProvider>
  </BrowserRouter>
);
