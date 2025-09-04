import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Container } from "@mui/material";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Container fixed>
      <App />
    </Container>
  </React.StrictMode>,
);
