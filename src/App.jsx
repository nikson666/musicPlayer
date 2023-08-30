import React from "react";
import { AppBar, MyLikedTracks, MyPlaylists, Player, Profile } from "./components";
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
            pb: 20
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
                <MyLikedTracks />
                <Player />
              </>
            )}
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
