import React from "react";
import { Box } from "@mui/material";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <Box
      className="App"
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Header />
      <Container />
    </Box>
  );
}

export default App;
