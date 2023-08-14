import React from "react";
import { AppBar } from "./components";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme/theme";
import { getMe } from "./queries/mediaQuery";

function App() {
  const [theme, colorMode] = useMode();

  const getMeBtnHandler = async () => {
    const data = await getMe();
    console.log("data of me", data)
  };

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
          <button onClick={getMeBtnHandler}>getMe</button>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
