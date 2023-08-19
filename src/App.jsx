import React from "react";
import { AppBar, MyPlaylists, Profile } from "./components";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme/theme";
import { useSelector } from "react-redux";
import authSelectors from "./redux/auth/selectors";

function App() {
  const isAuth = useSelector(authSelectors.getIsAuthSelector);
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
          <Container>
            <AppBar />
            {!isAuth ? (
              <h1>Please Login</h1>
            ) : (
              <>
                <Profile />
                <MyPlaylists />
              </>
            )}
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
