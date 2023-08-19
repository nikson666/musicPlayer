import { createAsyncThunk } from "@reduxjs/toolkit";
import authSelectors from "../auth/selectors";
import { getMyPlaylists } from "../../queries/spotifyQueries";

export const getMyPlaylistsThunk = createAsyncThunk(
  "api.spotify.com/v1/me/playlists",
  async (_, {getState}) => {
    const token = authSelectors.getAuthTokenSelector(getState());
    return await getMyPlaylists(token)
  }
);
