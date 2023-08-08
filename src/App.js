import React from "react";
import { AppBar } from "./components";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme/theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            background: theme.palette.background.gradient,
            minHeight: "100vh",
            height: "100%",
          }}
        >
          <AppBar />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

