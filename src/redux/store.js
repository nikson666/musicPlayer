import { configureStore } from "@reduxjs/toolkit";
import authSclice from "./auth/slice";

const store = configureStore({
  reducer: {
    auth: authSclice.reducer,
  },
});

export default store;
