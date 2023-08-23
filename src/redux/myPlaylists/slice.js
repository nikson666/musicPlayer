import { createSlice } from "@reduxjs/toolkit";
import { getMyPlaylistsThunk } from "./operation";

const initialState = {
  items: [],
};

const myPlaylistsSlice = createSlice({
  name: "myPlaylists",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMyPlaylistsThunk.fulfilled, (state, action) => {
      state.items = action.payload.items;
    });
  },
});

export default myPlaylistsSlice;
