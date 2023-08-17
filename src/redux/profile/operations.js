import { createAsyncThunk } from "@reduxjs/toolkit";
import authSelectors from "../auth/selectors";
import { getMe } from "../../queries/spotifyQueries";

export const getMeThunk = createAsyncThunk(
  "api.spotify.com/v1/me",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = authSelectors.getAuthTokenSelector(getState());

      return await getMe(token);
    } catch (err) {
      // this do not catch bugs why????

      return rejectWithValue(err);
    }
  }
);
