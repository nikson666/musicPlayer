import { createSlice } from "@reduxjs/toolkit";
import { getMeThunk } from "./operations";

const initialState = {
  name: "",
  smallImage: "",
  largeImage: "",
  error: "",
};

const profileSclice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMeThunk.fulfilled, (state, action) => {
        // change approach to catch bugs 
        if(action.payload.error) {
          return
        }
          state.name = action.payload.display_name;
          state.smallImage = action.payload?.images[0].url;
          state.largeImage = action.payload?.images[1].url;
      })
      .addCase(getMeThunk.rejected, (state, action) => {
        console.error("Case error message", action.error.message);
        state.error = true;
      });
  },
});

export default profileSclice;
