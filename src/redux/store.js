import { configureStore } from "@reduxjs/toolkit";
import authSclice from "./auth/slice";
import profileSclice from "./profile/slice";
import myPlaylistsSlice from "./myPlaylists/slice";

const store = configureStore({
  reducer: {
    auth: authSclice.reducer,
    profile: profileSclice.reducer,
    myPlaylists: myPlaylistsSlice.reducer,
  },
});

export default store;
