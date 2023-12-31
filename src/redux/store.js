import { configureStore } from "@reduxjs/toolkit";
import authSclice from "./auth/slice";
import profileSclice from "./profile/slice";
import myPlaylistsSlice from "./myPlaylists/slice";
import myLikedTracksSlice from "./myLikedTracks/slice";
import playerSlice from "./player/slice";

const store = configureStore({
  reducer: {
    auth: authSclice.reducer,
    profile: profileSclice.reducer,
    myPlaylists: myPlaylistsSlice.reducer,
    myLikedTracks: myLikedTracksSlice.reducer,
    player: playerSlice.reducer
  },
});

export default store;
