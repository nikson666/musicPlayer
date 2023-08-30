import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackUris: [],
  offset: null,
  playStatus: false,
};

const playerSlice = createSlice({
  name: "playerSlice",
  initialState,
  reducers: {
    setTrackUris: (state, action) => {
      state.trackUris = action.payload;
    },
    setPlayStatus: (state, action) => {
      state.playStatus = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload
    }
  },
});

export const { setTrackUris, setPlayStatus, setOffset } = playerSlice.actions;
export default playerSlice;
