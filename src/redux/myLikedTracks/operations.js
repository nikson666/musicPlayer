import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMyLikedTracks } from "../../queries/spotifyQueries";
import authSelectors from "../auth/selectors";

export const getMyLikedTracksThunk = createAsyncThunk(
  "api.spotify.com/v1/me/tracks",
  async (_, { getState }) => {
    const token = authSelectors.getAuthTokenSelector(getState());
    return await getMyLikedTracks(token);
  }
);
