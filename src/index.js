import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Validation</Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <Box mt={20}>
        <App />
      </Box>
    </Container>
  </>
);
