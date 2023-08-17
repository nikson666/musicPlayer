import { configureStore } from "@reduxjs/toolkit";
import authSclice from "./auth/slice";
import profileSclice from "./profile/slice";

const store = configureStore({
  reducer: {
    auth: authSclice.reducer,
    profile: profileSclice.reducer
  },
});

export default store;
