import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Container from "@mui/material/Container";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container
        maxWidth={"md"}
        className="container"
        style={{
          border: "1px solid #d8d8d8",
          borderTop: "0",
          borderBottom: "0",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "auto",
          maxWidth: "760px",
          height: "100%",
        }}
      >
        <App />
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);
