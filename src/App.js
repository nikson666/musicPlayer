import React from "react";
import { AppBar } from "./components";
import { Box } from "@mui/material";
import { colors } from "./common/colors";

function App() {
  return (
    <Box
      sx={{ background: colors.background, minHeight: "100vh", height: "100%" }}
    >
      <AppBar />
    </Box>
  );
}

export default App;
