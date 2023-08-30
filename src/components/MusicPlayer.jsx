import React from "react";
import { useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";
import authSelectors from "../redux/auth/selectors";
import playerSelectors from "../redux/player/selectors";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";

const MusicPlayer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const token = useSelector(authSelectors.getAuthTokenSelector);
  const offset = useSelector(playerSelectors.getOffsetSelector);
  const trackUris = useSelector(playerSelectors.getTrackUrisSelector);
  const playStatus = useSelector(playerSelectors.getPlayStatusSelector);

  const playerStyles = {
    activeColor: `${colors.typography.main[500]}`,
    color: `${colors.typography.main[500]}`,
    loaderColor: `${colors.typography.main[500]}`,
    sliderColor: "#1cb954",
    sliderHandleColor: "#1cb954",
    sliderHeight: 6,
    trackArtistColor: `${colors.typography.main[500]}`,
    trackNameColor: `${colors.typography.main[500]}`,
    bgColor: `${colors.player.background}`,
    sliderTrackColor: `${colors.typography.main[500]}`,
  }

  if (!token || !playStatus) return null;
  return (
    <Box
      sx={{
        backdropFilter: "brightness(0.7)",
        overflow: "hidden",
        borderRadius: 5,
        position: "fixed",
        bottom: 10,
        left: '50%',
        transform: "translate(-50%, -50%)",
        width: "80%"

      }}
    >
      <SpotifyPlayer
        styles={playerStyles}
        token={token}
        showSaveIcon
        uris={trackUris ? trackUris : []}
        play={playStatus}
        initialVolume={0.5}
        magnifySliderOnHover={true}
        offset={offset}
      />
    </Box>
  );
};

export default MusicPlayer;
